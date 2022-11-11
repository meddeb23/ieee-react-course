import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function ProductQuantity({ product, changeQuantity }) {
  console.log(product);
  return (
    <div className="flex">
      <button
        className="p-2"
        onClick={() => {
          if (product.quantity > 0)
            changeQuantity(product.quantity - 1, product._id);
        }}
      >
        <AiOutlineMinus />
      </button>
      <span className="quantity">{product.quantity}</span>
      <button
        className="p-2"
        onClick={() => {
          changeQuantity(product.quantity + 1, product._id);
        }}
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
}
