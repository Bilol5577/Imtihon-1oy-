import React from "react";
import Card from "./Card";

const Main = ({ products }) => {
  return (
    <div className="font-sans p-5 w-[1270px] mx-auto">
      <h2 className="mb-5 text-2xl font-semibold">Products</h2>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Main;
