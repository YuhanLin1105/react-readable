import React, { Component } from 'react';
import { connect } from 'react-redux';

import {fetchPostsAll} from '../store/actions/index';
import PostList from '../components/PostList/PostList';


class HomePage extends Component {


    componentDidMount() {
        this.props.fetchPostsAll();

    }

    render() {
        const list = this.props.posts
            ?<PostList  data={this.props.posts}/>
            :null;

        return list;
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPostsAll: () => dispatch(fetchPostsAll())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(HomePage);