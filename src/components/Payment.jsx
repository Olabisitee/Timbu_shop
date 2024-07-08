import React from "react";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="payment-page">
      <h2>Payment Method</h2>
      <div className="payment-method">
        <input
          type="radio"
          name="payment"
          value="credit-card"
          checked
          readOnly
        />{" "}
        Credit card
      </div>
      <div className="credit-card-details">
        <input type="text" placeholder="Card number" />
        <input type="text" placeholder="Expiring date" />
        <input type="text" placeholder="CVV" />
        <button className="pay-button">Pay</button>
      </div>
    </div>
  );
};

export default Payment;
