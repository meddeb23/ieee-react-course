import React from "react";

export default function Navbar() {
  return (
    <header className="bg-black p-4 mb-4">
      <nav>
        <h1 className="font-bold capitalize text-2xl">react-shop</h1>
        <ul className="flex justify-center items-center gap-8 capitalize text-lg">
          <li className="hover:text-slate-300 cursor-pointer">home</li>
          <li className="hover:text-slate-300 cursor-pointer">cart</li>
          <li className="hover:text-slate-300 cursor-pointer">about</li>
        </ul>
      </nav>
    </header>
  );
}
