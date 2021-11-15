import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useFirebase from "../../../hooks/useFirebase";
import "./Navigation.css";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <NavLink className="barnd-logo" to="/">
            Thompson Woodcraft
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <NavLink to="/" className="menu-item">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/explore" className="menu-item">
                Explore
              </NavLink>
            </Nav.Link>

            {user?.email && (
              <Nav.Link>
                <NavLink to="/dashboard" className="menu-item">
                  Dashboard
                </NavLink>
              </Nav.Link>
            )}

            {user?.email && (
              <Nav.Link>Hi, {user?.displayName || user?.email}</Nav.Link>
            )}

            {user?.email ? (
              <Nav.Link onClick={logOut}>LOGOUT</Nav.Link>
            ) : (
              <Nav.Link>
                <NavLink to="/login" className="menu-item">
                  Login
                </NavLink>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
