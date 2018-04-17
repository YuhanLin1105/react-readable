import React, { Component } from "react";
import { connect } from "react-redux";

import { actionCreator } from "../store/posts";
import PostList from "../components/PostList/PostList";

class PostPage extends Component {
  componentDidMount() {
    console.log(this.props.history.location.hash.slice(1));
    this.props.fetchPost(this.props.history.location.hash.slice(1));
  }

  render() {
    const post = this.props.post ? (
      <PostList post data={this.props.post} />
    ) : null;
    return post;
  }
}

const mapStateToProps = state => {
  return {
    post: state.posts.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: postId => dispatch(actionCreator.fetchPost(postId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
