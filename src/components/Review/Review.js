import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Review = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    data.email = user?.email;
    data.name = user?.displayName;
    console.log(data);
    axios
      .post("https://floating-shore-39651.herokuapp.com/reviews", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("You have placed the order successfully");
        }
      });
  };
  return (
    <div>
      <form className="post-form" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register("review")}
          placeholder="Add Your Review Here..."
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Review;
