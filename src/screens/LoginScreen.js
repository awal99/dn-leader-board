import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div id="parent" className>
      <h1 className="text-white">DN-LEADER_BOARD</h1>
      <Form id="form" className="col-lg-4 col-sm-12 col-md-12">
        <Form.Group as={Col} style={{ marginTop: 30 }}>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="enter email or phone" />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="enter password" />
        </Form.Group>
        <Form.Group as={Row}>
          <Col
            style={{
              marginLeft: 15,
              paddingRight: 30,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Link to="/">forgot password</Link>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col style={{ marginLeft: 15 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginBottom: 30 }}>
          <Col style={{ marginLeft: 15 }}>
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>
        <Form.Group as={Row} style={{ marginBottom: 30 }}>
          <Col style={{ marginLeft: 15 }}>
            Don't have an account <Link to="/register">Register</Link>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default LoginScreen;
