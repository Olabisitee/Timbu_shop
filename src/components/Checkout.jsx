import React, { useState } from "react";
import Payment from "./Payment";
import "./Checkout.css";

const Checkout = ({ setPage }) => {
  const [showPayment, setShowPayment] = useState(false);

  if (showPayment) {
    return <Payment />;
  }

  return (
    <div className="checkout-page">
      <div className="product-info">
        <img src="\images\IMG_7038 1.png" alt="Resolute Tee Shirt" />
        <h2>Resolute Tee Shirt</h2>
        <p>₦25,000</p>
        <p>Size: M Color: Pink</p>
        <div className="quantity-control">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
      <div className="shipping-info">
        <h2>Shipping Information</h2>
        <form>
          <input name="Full name" type="Full name" placeholder="Full name" />
          <input type="Email address" placeholder="Email address" />
          <input type="Phone number" placeholder="Phone number" />
          <input type="State" placeholder="State" />
          <input type="City" placeholder="City" />
        </form>
        <div className="order-summary">
          <p>Order Summary</p>
          <p>Resolute Tee (1 piece): ₦25,000</p>
          <p>Shipping fee: ₦2,000</p>
          <p>Total: ₦27,000</p>
        </div>
        <button className="pay-button" onClick={() => setShowPayment(true)}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Checkout;
