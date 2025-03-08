import React from "react";

const Item = ({ product }) => {
  return (
    <div className="flex flex-row items-center justify-start space-x-4 border border-gray-200 p-2 rounded-lg">
      <div className="">
        <img src={product.image} alt="" className="max-w-[200px]" />
      </div>
      <div>
        <div>
          <p className="text-md text-gray-700 font-medium">{product.name}</p>
        </div>
        <div className="flex items-center space-x-2 py-2">
          <p className="text-xs text-gray-500">
            Old Price <br />
            Tsh.{product.old_price}
          </p>
          <p className="text-xs text-red-500 font-bold">
            New Price
            <br />
            Tsh.{product.new_price}
          </p>
        </div>
        <div className="py-3">
          <button className="bg-red-500 hover:bg-red-400 px-8 py-2 rounded-full text-white font-medium text-xs">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
