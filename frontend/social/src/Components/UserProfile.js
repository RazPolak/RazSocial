import React, { Component } from "react";
import { addPost } from "../actions/postActions";
import { connect } from "react-redux";

import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class UserProfile extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image
              src="https://media.licdn.com/dms/image/C4D03AQFh00xAufvbjQ/profile-displayphoto-shrink_200_200/0?e=1568851200&v=beta&t=nZvu5EKixLgaU4vDErHetxeXWo8JRTTyx5P6To3bG14"
              roundedCircle
            />
          </Col>
          <Row>
            <Card bg="primary" text="white" style={{ width: "18rem" }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Row>
      </Container>
    );
  }
}

export default UserProfile;
