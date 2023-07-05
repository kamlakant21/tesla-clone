import React from "react";
import "./Product.css";
// import { useSetRecoilState } from "recoil";
// import { cartState } from "../../components/global-state/cartItem";
import { v4 as uuidv4 } from "uuid";

export default function Product(product) {
  const { image, title, description, price } = product;
  //   const setCart = useSetRecoilState(cartState);

  //   function addToCart() {
  //     const uniqueId = uuidv4();
  //     setCart((prevCart) => [...prevCart, { ...product, id: uniqueId }]);
  //   }

  return (
    <div className="product">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">₹{price}lakh</p>
      <button className="product-button">Add To Cart</button>
    </div>
  );
}
