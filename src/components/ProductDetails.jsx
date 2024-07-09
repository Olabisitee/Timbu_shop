// // ProductDetails.js
// import React from "react";
// import "./ProductDetails.css";

// const ProductDetails = () => (
//   <div className="product-details">
//     <div className="left-column">
//       <img src="" alt="Resolute Tee Shirt" />
//       <h2>Resolute Tee Shirt</h2>
//       <p>₦25,000</p>
//       <p>Size: M Color: Pink</p>
//       <div className="quantity-control">
//         <button>-</button>
//         <span>1</span>
//         <button>+</button>
//         <span>1</span>
//       </div>
//       <button className="checkout-button">Checkout here</button>
//     </div>
//     <div className="right-column">
//       <div className="tabs">
//         <button className="tab active">Product Details</button>
//         <button className="tab">Reviews</button>
//       </div>
//       <div className="description">
//         <h3>Description</h3>
//         <p>
//           Resolute tee shirt is a classic crewneck with relaxed, comfortable
//           shoulders. The material are of 52% Cotton, 48% Polyester blend for
//           softness and durability.
//         </p>
//         <h3>Colors</h3>
//         <ul>
//           <li>Pink</li>
//           <li>Black</li>
//           <li>White</li>
//         </ul>
//         <h3>Size</h3>
//         <ul>
//           <li>M</li>
//           <li>XL</li>
//           <li>XXL</li>
//         </ul>
//       </div>
//     </div>
//   </div>
// );

// export default ProductDetails;
// ProductDetails.js
import React from "react";
import "./ProductDetails.css";

const ProductDetails = () => (
  <div className="description">
    <h3>Description</h3>
    <p>
      Resolute tee shirt is a classic crewneck with relaxed, comfortable
      shoulders. The material is a 52% Cotton, 48% Polyester blend for softness
      and durability.
    </p>
    <h3>Colors</h3>
    <ul>
      <li>Pink</li>
      <li>Black</li>
      <li>White</li>
    </ul>
    <h3>Size</h3>
    <ul>
      <li>M</li>
      <li>XL</li>
      <li>XXL</li>
    </ul>
  </div>
);

export default ProductDetails;
