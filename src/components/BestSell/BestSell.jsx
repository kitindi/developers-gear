import React from "react";
import { all_products } from "../../assets/all_products";
import Item from "../Item/Item";

const BestSell = () => {
  const bestSale = all_products.filter((product) => {
    return product.ratings > 4;
  });
  return (
    <div className="py-10" id="best-sellers">
      <h2 className="text-gray-800 text-3xl mb-3 font-semibold">Best Sellers</h2>
      <h2 className="text-gray-600 text-lg mb-3">Trusted by Tech Professionals Worldwide</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 py-10">
        {bestSale.map((product) => {
          return <Item key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default BestSell;
