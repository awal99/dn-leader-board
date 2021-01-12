import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Welcome from "../components/Welcome";

const RegisterScreen = () => {
  return (
    <Row
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        margin: 0,
      }}
    >
      <Col lg={8} md={12} sm={12} className="welcome">
        <Welcome />
      </Col>
      <Col className="parent" lg={4} md={12} sm={12}>
        <Form id="form">
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="enter first name" />
          </Form.Group>
          <Form.Group as={Col} style={{ marginTop: 30 }}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="enter second name" />
          </Form.Group>
          <Form.Group as={Col} style={{ marginTop: 30 }}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="enter email or phone" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="enter password" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="enter password" />
          </Form.Group>
          <Form.Group as={Row} style={{ marginBottom: 30 }}>
            <Col style={{ marginLeft: 15 }}>
              <Button type="submit">Sign up</Button>
            </Col>
          </Form.Group>
          <Form.Group as={Row} style={{ marginBottom: 30 }}>
            <Col style={{ marginLeft: 15 }}>
              Already have an account <Link to="/">login</Link>
            </Col>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default RegisterScreen;
