import React from "react";
import { NavLink } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>
              Thompson’s <br />
              Woodcraft
            </h1>
            <p>Est. 1972</p>
          </div>
          <div className="col-md-6">
            <p>
              Wilfred Thompson of North Bedeque, Prince Edward Island is an
              accomplished woodworker who specializes in turning. <br />
              <br />
              In the business for almost 50 years, he has perfected his skills
              working daily in his shop on Route 1A, east of Summerside. <br />
              <br />
              Wilfred works with all varieties of hardwood, especially
              bird’s-eye maple and birch, and is known internationally for his
              beautiful salad bowls (his flagship product).
            </p>

            <NavLink to="/explore">
              <button className="btn btn-primary">Explore Now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
