import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import * as actionCreater from './store/actions/index';

class App extends Component {


  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {

    const { categories } = this.props;
    const categoryRoute = categories
      ? categories.map(
        category =>
          <Route
            key={category.name}
            exact
            path={'/' + category.path}
            render={() => <CategoryPage category={category.name} />}
          />)
      : null;


    console.log(categories);
    return (
      <Layout categories={categories ? categories : []}>
        {categoryRoute}
        {/* <Route
          exact
          path={'/react'}
          render={() => <CategoryPage category='react' />}
        /> */}
        <Route exact path='/' component={HomePage} />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(actionCreater.fetchCategories())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
