import React, { useState } from "react";
import { customContext } from "../context/StateContext";
import Card from "./Card";

const Products = () => {
  const { dispatch, state } = customContext();

  const products = state.products;
  return (
    <>
      <div className=" flex flex-wrap gap-10 items-center justify-center">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
