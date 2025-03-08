import React from "react";
import { all_products } from "../../assets/all_products";
import Item from "../Item/Item";

const BestSell = () => {
  const bestSale = all_products.filter((product) => {
    return product.ratings > 4;
  });
  return (
    <div className="py-10">
      <h2 className="text-gray-700 text-2xl mb-3">Trusted by Tech Professionals Worldwide</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
        {bestSale.map((product) => {
          return <Item key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default BestSell;
