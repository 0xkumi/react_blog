import React, { Component } from "react";
import fetchPosts from "../actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <h2> POSTs: </h2>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex);
