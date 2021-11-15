import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Purchase.css";

const Purchase = (props) => {
  const history = useHistory();
  const { user } = useAuth();
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const { product, price } = singleProduct;

  useEffect(() => {
    fetch(`https://floating-shore-39651.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [id]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.product = product;
    data.price = price;
    console.log(data);
    axios
      .post("https://floating-shore-39651.herokuapp.com/orders", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("You have placed the order successfully");
          history.push("/dashboard/myOrders");
        }
      });
  };

  return (
    <div className="container login-wrapper">
      <h2 className="text-center">Place Your Order</h2>
      <h3 className="text-center">Product Name: {product}</h3>
      <h4 className="text-center">Price: {price}</h4>
      <div>
        <form className="post-form" onSubmit={handleSubmit(onSubmit)}>
          <input readOnly {...register("name")} value={user?.displayName} />
          <input
            readOnly
            type="email"
            {...register("email")}
            value={user?.email}
          />
          <input
            {...register("address", { required: true })}
            placeholder="Address"
          />
          <input
            {...register("phone", { required: true })}
            placeholder="Phone"
          />
          <input type="submit" value="Place Order" />
        </form>
      </div>
    </div>
  );
};

export default Purchase;
