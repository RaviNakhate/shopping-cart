import React from "react";
import Product from "./product";
import Filter from "./filter";

export default function Main() {
  return (
    <>
      <div className="bg-dark mx-1 filter">
        <Filter />
      </div>
      <div className="product ">
        <Product />
      </div>
    </>
  );
}
