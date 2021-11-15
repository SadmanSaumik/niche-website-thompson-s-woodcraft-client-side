import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const ReviewCard = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://floating-shore-39651.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div className="row gy-5">
        {reviews.map((review) => (
          <div className="col-md-4">
            <Card>
              <Card.Header>Customer Review</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p> {review.review} </p>
                  <footer className="blockquote-footer">{review.name}</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
