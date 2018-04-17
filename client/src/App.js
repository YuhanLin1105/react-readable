import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import PostPage from './pages/PostPage';
import { actionCreator } from './store/categories';

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

    return (
      <Layout categories={categories ? categories : []}>
        <Switch>
          {categoryRoute}
          <Route path='/post' component={PostPage} />
          <Route exact path='/' component={HomePage} />
        </Switch>
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
    fetchCategories: () => dispatch(actionCreator.fetchCategories())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
