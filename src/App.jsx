// App.js
import React, { useState } from "react";
import ProductDetails from "./components/ProductDetails";
import Reviews from "./components/Reviews";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="container">
      <div className="product-details">
        <div className="left-column">
          <img src="\images\IMG_7038 1.png" alt="Resolute Tee Shirt" />
          <h2>Resolute Tee Shirt</h2>
          <p>₦25,000</p>
          <p>Size: M Color: Pink</p>
          <div className="quantity-control">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className="checkout-button">Checkout here</button>
        </div>
        <div className="right-column">
          <div className="tabs">
            <button
              className={`tab ${activeTab === "details" ? "active" : ""}`}
              onClick={() => setActiveTab("details")}
            >
              Product Details
            </button>
            <button
              className={`tab ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>
          {activeTab === "details" ? <ProductDetails /> : <Reviews />}
        </div>
      </div>
    </div>
  );
};

export default App;
