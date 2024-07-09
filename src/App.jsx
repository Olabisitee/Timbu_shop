// App.js
import React, { useState } from "react";
import ProductDetails from "./components/ProductDetails";
import Reviews from "./components/Reviews";
import Checkout from "./components/Checkout";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("details");
  const [page, setPage] = useState("home");

  if (page === "checkout") {
    return <Checkout setPage={setPage} />;
  }

  return (
    <div className="container">
      <div className="product-details">
        <div className="left-column">
          <img src="\images\IMG_7038 1.png" alt="Resolute Tee Shirt" />
          <h2>
            <strong>Resolute Tee Shirt</strong>
          </h2>
          <p>
            <strong>₦25,000</strong>
          </p>
          <p>
            <strong>Size: M Color: Pink </strong>
          </p>
          <div className="button-control">
            <strong>Quantity: </strong>
            <span> - </span>
            <span> 1 </span>
            <span> + </span>
            <span> 0 </span>
          </div>
          <button
            className="checkout-button"
            onClick={() => setPage("checkout")}
          >
            Checkout here
          </button>
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
