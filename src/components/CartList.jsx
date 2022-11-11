import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import ProductQuantity from "./ProductQuantity";

export default function CartList({
  products,
  handleOnChangeQuantity,
  deleteItem,
}) {
  return (
    <div className="max-w-xl border-x-[1px] border-t-[1px] border-black mx-auto">
      {products.map((product) => (
        <CartItem
          product={product}
          handleOnChangeQuantity={handleOnChangeQuantity}
          deleteItem={deleteItem}
          key={"prod" + product._id}
        />
      ))}
    </div>
  );
}

function CartItem({ product, handleOnChangeQuantity, deleteItem }) {
  return (
    <div className="list-item">
      <div>{product.name}</div>
      <ProductQuantity
        changeQuantity={handleOnChangeQuantity}
        product={product}
      />
      <div>
        {product.unitPrice} {product.currency}
      </div>
      <div>
        {product.unitPrice * product.quantity} {product.currency}
      </div>
      <button
        onClick={() => deleteItem(product._id)}
        className="p-2 bg-red-400 text-white rounded-md"
      >
        <BsFillTrashFill />
      </button>
    </div>
  );
}
