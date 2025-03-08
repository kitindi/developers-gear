import React from "react";
import Hero from "../components/Hero/Hero";
import BestSell from "../components/BestSell/BestSell";

import Categories from "../components/Categories/Categories";
import Faq from "../components/FAQ/Faq";

const Shop = () => {
  return (
    <div>
      <div className="px-8 md:px-28">
        <Hero />
      </div>
      <Categories />
      <div className="px-8 md:px-28">
        <BestSell />
        <Faq />
      </div>
    </div>
  );
};

export default Shop;
