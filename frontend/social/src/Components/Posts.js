import React, { Component } from "react";
import {
  fetchPosts,
  fetchLatestPost,
  fetchSpecificUserPosts
} from "../actions/postActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup";

class Posts extends Component {
  componentDidMount() {
    const username = this.props.location.pathname.substring(6);
    if (username) {
      this.props.fetchSpecificUserPosts(username);
    } else {
      this.props.fetchPosts();
    }
  }

  componentWillReceiveProps(nextProps) {
    const username = this.props.location.pathname.substring(6);
    const newUsername = nextProps.location.pathname.substring(6);
    if (username !== newUsername) {
      this.props.fetchSpecificUserPosts(newUsername);
    }
    const newPost = nextProps.newPost;

    if (
      !(Object.entries(newPost).length === 0 && newPost.constructor === Object)
    ) {
      this.props.fetchLatestPost();
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <ListGroup.Item key={post.id}>
        <h4>{post.title}</h4>
        <br />
        {post.body}
        <br />
        {post.user}
      </ListGroup.Item>
    ));
    return <ListGroup>{postItems}</ListGroup>;
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item,
  isLogged: state.user.isLogged
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchPosts, fetchLatestPost, fetchSpecificUserPosts }
  )(Posts)
);
