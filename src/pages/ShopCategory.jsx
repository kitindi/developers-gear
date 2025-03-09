import React, { useContext } from "react";
import { Link } from "react-router";
import { ShopContext } from "../context/shopContext";
import Item from "../components/Item/Item";

const ShopCategory = ({ category, title, link }) => {
  const { all_products } = useContext(ShopContext);
  const bestSale = all_products.filter((product) => {
    return product.category === category;
  });

  if (bestSale.length === 0) {
    return (
      <div className="text-center py-10 px-8 md:px-28 min-h-96">
        <div className=" py-8">
          <ul className="flex items-center text-gray-500 text-sm space-x-2">
            <Link to="/">Shop</Link> <span></span>
            <span> / </span>
            <p>{link}</p>
          </ul>
        </div>
        <h1 className="text-3xl font-medium text-gray-700">No Products Found</h1>
      </div>
    );
  }
  return (
    <div className="md:px-28 px-8 min-h-screen">
      <div className="">
        <div className="py-8">
          <ul className="flex items-center text-gray-500 text-sm space-x-2">
            <Link to="/">Shop</Link> <span></span>
            <span> / </span>
            <p>{link}</p>
          </ul>
        </div>
        <h1 className="text-2xl md:text-3xl font-medium text-gray-700 ">{title}</h1>
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10">
          {bestSale.map((product) => {
            return <Item key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
