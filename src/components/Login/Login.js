import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, isLoading } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(loginData.email, loginData.password, location, history);
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
      <h2 className="text-center mb-5">Please Login</h2>
      {!isLoading && (
        <Form onSubmit={handleSubmit} className="w-50 mx-auto">
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

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br />
          <br />
          <p>
            <NavLink className="login-text" to="/register">
              Don't Have An Account? Register Here
            </NavLink>
          </p>
        </Form>
      )}
      {isLoading && (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      )}
    </div>
  );
};

export default Login;
