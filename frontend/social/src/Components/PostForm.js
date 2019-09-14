import React, { Component } from "react";
import { addPost } from "../actions/postActions";
import { connect } from "react-redux";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.addPost(post);
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              as="input"
              value={this.state.title}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="body">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              value={this.state.body}
              onChange={this.onChange}
            />
          </Form.Group>

          <Button variant="primary" onClick={this.onSubmit}>
            Submit
          </Button>
        </Form>
        <br />
      </div>
    );
  }
}

export default connect(
  null,
  { addPost }
)(PostForm);
