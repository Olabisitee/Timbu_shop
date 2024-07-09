// Reviews.js
import React from "react";
import "./Reviews.css";

const Reviews = () => (
  <div className="reviews">
    <div className="review-item">
      <p className="reviewer">Daniel O</p>
      <p className="para">
        I love the quality of the Tee Shirt. I will still buy this product
        again.
      </p>
      <p>★★★★★</p>
    </div>
    <div className="review-item">
      <p className="reviewer">Udukate</p>
      <p className="para">
        The product is not as good as it looks here, buying at your risk.
      </p>
      <p>★★★★★</p>
    </div>
    <div className="review-item">
      <p className="reviewer">David M</p>
      <p className="para">I love this product so much.</p>
      <p>★★★★★</p>
    </div>
  </div>
);

export default Reviews;
