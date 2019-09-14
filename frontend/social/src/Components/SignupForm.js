import React, { Component } from "react";
import { signupRequest } from "../actions/loginActions";
import { connect } from "react-redux";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class SignupForm extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    passwordConf: ""
  };

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.validatePasswords()) {
      const user = {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      };
      this.props.signupRequest(user);
    } else {
      alert("Password did not match.");
    }
  };

  validatePasswords = () => {
    return this.state.password === this.state.passwordConf;
  };

  render() {
    return (
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            as="input"
            value={this.state.email}
            onChange={this.onChange}
          />
        </Form.Group>

        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            as="input"
            value={this.state.username}
            onChange={this.onChange}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            as="input"
            value={this.state.password}
            onChange={this.onChange}
          />
        </Form.Group>

        <Form.Group controlId="passwordConf">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control
            type="password"
            as="input"
            value={this.state.passwordConf}
            onChange={this.onChange}
          />
        </Form.Group>

        <p>By creating an account you agree to our Terms & Privacy.</p>

        <Button variant="primary" onClick={this.onSubmit}>
          Register
        </Button>
      </Form>
    );
  }
}

export default connect(
  null,
  { signupRequest }
)(SignupForm);
