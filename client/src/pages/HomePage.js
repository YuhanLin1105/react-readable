import React, { Component } from "react";
import { connect } from "react-redux";
import { Spin, Divider } from "antd";

import { actionCreator } from "../store/posts";
import PostList from "../components/PostList/PostList";

class HomePage extends Component {
  componentDidMount() {
    console.log("HomePageDidMount");
    this.props.fetchPostsAll();
  }

  render() {
    if (this.props.posts) {
      const { posts, loading } = this.props.posts;
      const list = posts ? <PostList data={posts} /> : null;
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
    fetchPostsAll: () => dispatch(actionCreator.fetchPostsAll())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
