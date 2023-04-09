import React from "react";
import { Route, Routes } from "react-router-dom";
import AddToCart from "./components/AddToCart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/addToCart" element={<AddToCart />} />
      </Routes>
    </>
  );
};

export default App;
