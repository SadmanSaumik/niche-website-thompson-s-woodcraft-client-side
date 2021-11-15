import React from "react";
import { NavLink } from "react-router-dom";
import useProduct from "../../hooks/useProducts";
import Product from "../Explore/Product/Product";
import ReviewCard from "../Review/ReviewCard";
import Banner from "./Banner/Banner";
import "./Home.css";

const Home = () => {
  const { products } = useProduct();
  console.log(products);
  return (
    <div>
      <Banner></Banner>
      <div className="container my-5">
        <h2 className="text-center my-5">Wood Turned Into Functional Art</h2>

        <div className="row gy-5">
          {products.slice(0, 6).map((product) => (
            <Product
              key={product._id}
              product={product}
              col="col-md-4"
            ></Product>
          ))}
        </div>
      </div>
      <div className="container my-5">
        <h2 className="text-center mb-5">Our Testimonials</h2>
        <ReviewCard></ReviewCard>
      </div>

      <div className="ad-wrapper">
        <div className="container">
          <div className="row ad-wrapper-row">
            <div className="col-md-10 ad-wrapper-left">
              <h2>SALE UP FOR NEW YEAR</h2>
              <p>GET 50% OFF FOR ALL PRODUCTS</p>
            </div>
            <div className="col-md-2 ad-wrapper-right">
              <NavLink to="/explore">
                <button className="btn btn-primary hero-button">Buy Now</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
