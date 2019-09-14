import React, { Component } from "react";
import { loginRequest } from "../actions/loginActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.isLogged) {
      this.props.history.push("/");
    }
  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.loginRequest(user);
  };

  render() {
    return (
      <div>
        <Form>
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

          <p>
            Click{" "}
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => this.props.history.push("/signup")}
            >
              {" "}
              here{" "}
            </Button>{" "}
            if you want to sign up.{" "}
          </p>

          <Button variant="primary" onClick={this.onSubmit}>
            Submit
          </Button>
        </Form>
        <br />
      </div>
    );
  }
}

LoginForm.propTypes = {
  loginRequest: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLogged: state.user.isLogged
});

export default withRouter(
  connect(
    mapStateToProps,
    { loginRequest }
  )(LoginForm)
);
