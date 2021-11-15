import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { product, price, pic, _id } = props.product;
  const handleBuyNow = (id) => {};
  return (
    <>
      <div className={props.col}>
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={pic} />
          <Card.Body>
            <Card.Title>{product}</Card.Title>
            <Card.Text>
              <h5>${price}</h5>
            </Card.Text>
            <NavLink to={`/purchase/${_id}`}>
              <Button variant="primary">Buy Now</Button>
            </NavLink>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Product;
