import React, { useState } from "react";
import SuccessfulPay from "./SuccessfulPay";
import "./Payment.css";

const Payment = () => {
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  if (isPaymentSuccessful) {
    return <SuccessfulPay />;
  }

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
        />
        Credit card
      </div>
      <div className="credit-card-details">
        <h2>Credit card details</h2>

        <label id="label">Card number</label>
        <input className="place" type="text" />
        <label id="label">Expiring date</label>
        <input className="place" type="email" />
        <label id="label">CVV</label>
        <input className="place" type="tel" />

        <button
          className="success-button"
          onClick={() => setIsPaymentSuccessful(true)}
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default Payment;
