// components/ProductListing.jsx
import React from "react";
import "./ProductListing.css";

const products = [
  {
    id: 1,
    name: "Resolute Tee Shirt",
    price: 25000,
    image: "/images/IMG_7038 1 (1).png",
    icon: "/images/Vector.png",
  },
  {
    id: 2,
    name: "Trucker Hats",
    price: 10000,
    image: "/images/IMG_7038 1 (2).png",
    icon: "/images/Vector.png",
  },
  {
    id: 3,
    name: "Leather Jackets",
    price: 40000,
    image: "/images/IMG_7038 1 (3).png",
    icon: "/images/Vector.png",
  },
  {
    id: 4,
    name: "Two Pieces Tee",
    price: 35000,
    image: "/images/IMG_7038 1 (4).png",
    icon: "/images/Vector.png",
  },
  {
    id: 5,
    name: "Unisex Armless",
    price: 40000,
    image: "/images/IMG_7038 1 (6).png",
    icon: "/images/Vector.png",
  },
  {
    id: 6,
    name: "Bucket Hat",
    price: 15000,
    image: "/images/IMG_7038 1 (8).png",
    icon: "/images/Vector.png",
  },
  {
    id: 7,
    name: "Snake Skin Jacket",
    price: 80000,
    image: "/images/IMG_7038 1 (11).png",
    icon: "/images/Vector.png",
  },
  {
    id: 8,
    name: "Unisex Turtle Neck",
    price: 40000,
    image: "/images/IMG_7038 1 (12).png",
    icon: "/images/Vector.png",
  },
  {
    id: 9,
    name: "Cargo Short",
    price: 20000,
    image: "/images/IMG_7038 1 (13).png",
    icon: "/images/Vector.png",
  },
  {
    id: 10,
    name: "Two Piece Crop Top",
    price: 30000,
    image: "/images/IMG_7038 1 (14).png",
    icon: "/images/Vector.png",
  },
  {
    id: 11,
    name: "stitched jacket",
    price: 35000,
    image: "/images/IMG_7038 1 (15).png",
    icon: "/images/Vector.png",
  },
  {
    id: 12,
    name: "Purple hoodie",
    price: 30000,
    image: "/images/IMG_7038 1 (16).png",
    icon: "/images/Vector.png",
  },
  {
    id: 13,
    name: "Unisex jort",
    price: 20000,
    image: "/images/IMG_7038 1 (18).png",
    icon: "/images/Vector.png",
  },
  {
    id: 14,
    name: "Hoodie $ joggler",
    price: 35000,
    image: "/images/IMG_7038 1 (19).png",
    icon: "/images/Vector.png",
  },
  {
    id: 15,
    name: "Unisex Tee",
    price: 40000,
    image: "/images/IMG_7038 1 (20).png",
    icon: "/images/Vector.png",
  },
  {
    id: 16,
    name: "Resolute polo",
    price: 35000,
    image: "/images/IMG_7038 1 (21).png",
    icon: "/images/Vector.png",
  },
  {
    id: 17,
    name: "Camo cargo",
    price: 40000,
    image: "/images/IMG_7038 1 (16).png",
    icon: "/images/Vector.png",
  },
  {
    id: 18,
    name: "Female short",
    price: 40000,
    image: "/images/IMG_7038 1 (20).png",
    icon: "/images/Vector.png",
  },
  {
    id: 19,
    name: "Hats",
    price: 35000,
    image: "/images/IMG_7038 1 (8).png",
    icon: "/images/Vector.png",
  },
  {
    id: 20,
    name: "Unisex Tee",
    price: 40000,
    image: "/images/IMG_7038 1 (4).png",
    icon: "/images/Vector.png",
  },
];

const ProductListing = ({ setPage }) => {
  return (
    <div className="product-listing">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2 className="title">{product.name}</h2>
          <p className="amount">₦{product.price.toLocaleString()}</p>
          <div className="product-control">
            <img src={product.icon} alt={product.icon} />
            <span>-</span>
            <span>0</span>
            <span>+</span>
            <button className="clear-button">Clear</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
