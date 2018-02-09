import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostList from '../components/PostList/PostList';
import { fetchPostsCategory } from '../store/actions/index';


class CategoryPage extends Component {

    componentDidMount() {
        this.props.fetchCategoryPosts(this.props.category);
    }

    render() {
        const { posts } = this.props;
        const list = posts
            ? <PostList data={posts} />
            : null
        return list;
    };

}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategoryPosts: (category) => dispatch(fetchPostsCategory(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);