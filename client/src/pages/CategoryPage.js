import React, { Component } from "react";
import { connect } from "react-redux";
import { Spin } from "antd";

import PostList from "../components/PostList/PostList";
import { actionCreator } from "../store/posts";

class CategoryPage extends Component {
  componentDidMount() {
    this.props.fetchCategoryPosts(this.props.category);
  }

  render() {
    if (this.props.posts) {
      const { posts, loading } = this.props.posts;
      const list = posts ? <PostList data={posts} /> : null;
      console.log(list);
      return loading ? (
        <div style={{ textAlign: "center" }}>
          <Spin />
        </div>
      ) : (
        list
      );
    } else {
      <div style={{ textAlign: "center" }}>
        <Spin />
      </div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategoryPosts: category =>
      dispatch(actionCreator.fetchPostsCategory(category))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
