import React from "react";
import { Col, Nav, Row, Tab, Button } from "react-bootstrap";
import MyOrders from "../MyOrders/MyOrders";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Dashboard.css";
import Payment from "../Payment/Payment";
import Review from "../Review/Review";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { user, logOut } = useAuth();
  return (
    <div className="container dashboard-wrapper">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3} className="dash-left">
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="mb-3">
                <Link className="dash-items" to={`${url}`}>
                  Dashboard
                </Link>
              </Nav.Item>
              <Nav.Item className="mb-3">
                <Link className="dash-items" to={`${url}/myOrders`}>
                  My Orders
                </Link>
              </Nav.Item>
              <Nav.Item className="mb-3">
                <Link className="dash-items" to={`${url}/pay`}>
                  Pay
                </Link>
              </Nav.Item>

              <Nav.Item className="mb-3">
                <Link className="dash-items" to={`${url}/review`}>
                  Review
                </Link>
              </Nav.Item>

              <Button className="mt-5" onClick={logOut} variant="danger">
                Log Out
              </Button>
            </Nav>
          </Col>
          <Col sm={9} className="dash-right">
            <Tab.Content>
              <Switch>
                <Route exact path={path}>
                  <h3>Hello, {user.displayName}</h3>
                </Route>
                <Route path={`${path}/myOrders`}>
                  <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/pay`}>
                  <Payment></Payment>
                </Route>
                <Route path={`${path}/review`}>
                  <Review></Review>
                </Route>
              </Switch>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Dashboard;
