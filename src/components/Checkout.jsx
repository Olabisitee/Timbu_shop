// import React, { useState } from "react";
// import Payment from "./Payment";
// import "./Checkout.css";

// const Checkout = ({ setPage }) => {
//   const [showPayment, setShowPayment] = useState(false);

//   if (showPayment) {
//     return <Payment />;
//   }

//   return (
//     <div className="checkout-page">
//       <div className="product-info">
//         <img src="\images\IMG_7038 1.png" alt="Resolute Tee Shirt" />
//         <h2>Resolute Tee Shirt</h2>
//         <p>₦25,000</p>
//         <p>Size: M Color: Pink</p>
//         <div className="quantity-control">
//           <strong>Quantity: </strong>
//           <span> - </span>
//           <span> 1 </span>
//           <span> + </span>
//           <span> 0 </span>
//         </div>
//         <div className="shipping-info">
//           <h2>Shipping Information</h2>
//           <form>
//             <label>Full Name:</label>
//             <input type="text" />
//             <label>Email Address:</label>
//             <input type="text" />
//             <label>Phone Number:</label>
//             <input type="text" />
//             <label>State:</label>
//             <input type="text" />
//             <label>City:</label>
//             <input type="text" />
//           </form>
//           <div className="order-summary">
//             <p>Order Summary</p>
//             <p>Resolute Tee (1 piece): ₦25,000</p>
//             <p>Shipping fee: ₦2,000</p>
//             <p>Total: ₦27,000</p>
//           </div>
//           <button className="pay-button" onClick={() => setShowPayment(true)}>
//             Pay Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
import React, { useState } from "react";
import Payment from "./Payment";
import "./Checkout.css";

const Checkout = ({ setPage }) => {
  const [showPayment, setShowPayment] = useState(false);

  if (showPayment) {
    return <Payment />;
  }

  return (
    <div className="container">
      <div className="checkout-page">
        <div className="product-info">
          <img src="\images\IMG_7038 1.png" alt="Resolute Tee Shirt" />
          <h2>Resolute Tee Shirt</h2>
          <p>₦25,000</p>
          <p>Size: M Color: Pink</p>
          <div className="quantity-control">
            <strong>Quantity: </strong>
            <span> - </span>
            <span> 1 </span>
            <span> + </span>
            <span> 0 </span>
          </div>
        </div>
        <div className="shipping-info">
          <h2>Shipping Information</h2>
          <form>
            <label className="label">Full Name</label>
            <input type="text" />
            <label className="label">Email Address</label>
            <input type="email" />
            <label className="label">Phone Number</label>
            <input type="tel" />
            <label className="label">State</label>
            <input type="text" />
            <label className="label">City</label>
            <input type="text" />
          </form>
          <div className="order-summary">
            <p className="sum">Order Summary</p>
            <p className="ship">Resolute Tee (1 piece): ₦25,000</p>
            <p className="ship">Shipping fee: ₦2,000</p>
            <p className="total">Total: ₦27,000</p>
          </div>
          <button className="pay-button" onClick={() => setShowPayment(true)}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
