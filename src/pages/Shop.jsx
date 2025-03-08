import React from "react";
import Hero from "../components/Hero/Hero";
import BestSell from "../components/BestSell/BestSell";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import Categories from "../components/Categories/Categories";

const Shop = () => {
  return (
    <div>
      <div className="md:px-28">
        <Hero />
      </div>
      <Categories />
      <div className="md:px-28">
        <BestSell />
      </div>
      <NewArrivals />
    </div>
  );
};

export default Shop;
