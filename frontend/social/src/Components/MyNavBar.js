import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logoutRequest } from "../actions/loginActions";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

class MyNavBar extends Component {
  state = {
    search: ""
  };

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  searchHandler = e => {
    const searchValue = this.state.search;
    if (searchValue) {
      this.props.history.push("/user/" + searchValue);
    } else {
      alert("Please write something.");
    }
  };

  render() {
    return this.props.isLogged ? this.userNav() : this.unknownNav();
  }
  userNav = () => {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>RazSocial</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={() => this.props.history.push("/")}>
              Home
            </Nav.Link>
            <Nav.Link onClick={() => this.props.logoutRequest()}>
              Logout
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              id="search"
              onChange={this.onChange}
              value={this.state.search}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button variant="outline-info" onClick={this.searchHandler}>
              Search
            </Button>
          </Form>
        </Navbar>
      </div>
    );
  };

  unknownNav = () => {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>RazSocial</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={() => this.props.history.push("/")}>
              Home
            </Nav.Link>
            <Nav.Link onClick={() => this.props.history.push("/login")}>
              Login
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              id="search"
              onChange={this.onChange}
              value={this.state.search}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button variant="outline-info" onClick={this.searchHandler}>
              Search
            </Button>
          </Form>
        </Navbar>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  isLogged: state.user.isLogged
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutRequest }
  )(MyNavBar)
);
