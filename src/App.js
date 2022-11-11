import "./index.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import CartList from "./components/CartList";

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

  const deleteCartItem = (_id) => {
    setproducts(products.filter((i) => i._id !== _id));
  };

  return (
    <div>
      <Navbar />
      <main className="max-w-5xl">
        <CartList
          products={products}
          handleOnChangeQuantity={handleOnChangeQuantity}
          deleteItem={deleteCartItem}
        />
      </main>
    </div>
  );
}

export default App;
