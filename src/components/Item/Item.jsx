import React from "react";

const Item = ({ product }) => {
  return (
    <div className="flex flex-row items-center justify-start space-x-4 border border-gray-200 p-2.5 rounded-lg">
      <div className="">
        <img src={product.image} alt="" className="w-96 md:w-80" />
      </div>
      <div>
        <div>
          <p className="text-sm text-gray-700 font-medium">{product.name}</p>
        </div>
        <div className="flex items-center space-x-2 py-2">
          {product.sale ? (
            <p className="text-xs text-red-500 font-bold">
              <span className="text-gray-700"> New Price</span>
              <br />
              Tsh.{product.old_price - product.old_price * product.discount}
            </p>
          ) : (
            <p className="text-xs text-gray-500">
              Old Price <br />
              Tsh.{product.old_price}
            </p>
          )}
        </div>
        <div className="py-3">
          <button className="bg-red-500 hover:bg-red-400 px-8 py-2 rounded-full text-white font-medium text-xs">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
