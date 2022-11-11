import "./index.css";
import ProductQuantity from "./components/ProductQuantity";
import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";

function App() {
  const [products, setproducts] = useState([
    {
      _id: 1,
      name: "Jordan 10",
      unitPrice: 180,
      currency: "DT",
      quantity: 2,
    },
    {
      _id: 2,
      name: "Jordan 10",
      unitPrice: 180,
      currency: "DT",
      quantity: 2,
    },
    {
      _id: 3,
      name: "Jordan 10",
      unitPrice: 180,
      currency: "DT",
      quantity: 2,
    },
    {
      _id: 4,
      name: "Jordan 10",
      unitPrice: 180,
      currency: "DT",
      quantity: 2,
    },
  ]);

  const handleOnChangeQuantity = (newQts, prod_id) => {
    setproducts(
      products.map((i) => (i._id === prod_id ? { ...i, quantity: newQts } : i))
    );
  };

  return (
    <div>
      {products.map((product) => (
        <div key={"prod" + product._id} className="list-item">
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
            onClick={() => {
              setproducts(products.filter((i) => i._id !== product._id));
            }}
            className="p-2 bg-red-400 text-white rounded-md"
          >
            <BsFillTrashFill />
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
