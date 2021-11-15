import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();

  const { user, registerUser, isLoading } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.password.length !== 6) {
      alert("Password Must Be 6 Charecters");
      return;
    }
    if (loginData.password !== loginData.password2) {
      alert("Password Not Matched");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
  };
  const hanldeOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(loginData);
  };
  return (
    <div className="container login-wrapper">
      <h2 className="text-center mb-5">Please Register Here</h2>
      {!isLoading && (
        <Form onSubmit={handleSubmit} className="w-50 mx-auto">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onBlur={hanldeOnChange}
              name="name"
              type="text"
              placeholder="Your Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={hanldeOnChange}
              name="email"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onBlur={hanldeOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Re-type Password</Form.Label>
            <Form.Control
              name="password2"
              type="password"
              placeholder="Re-type Password"
              onBlur={hanldeOnChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br />
          <br />
          <p>
            <NavLink className="login-text" to="/login">
              Already Registered? Login Here
            </NavLink>
          </p>
        </Form>
      )}
      {isLoading && (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      )}
      {user?.email && (
        <Alert variant="primary">User Created Successfully.</Alert>
      )}
    </div>
  );
};

export default Register;
