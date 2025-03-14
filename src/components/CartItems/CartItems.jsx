import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router";

const CartItems = () => {
  const { all_products, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  return (
    <div>
      <div className="grid grid-cols-6 gap-4 pt-8">
        <p className="text-md font-medium text-gray-600">Products</p>
        <p className="text-md font-medium text-gray-600">Product Name</p>
        <p className="text-md font-medium text-gray-600">Price</p>
        <p className="text-md font-medium text-gray-600">Quantity</p>
        <p className="text-md font-medium text-gray-600">Total</p>
        <p className="text-md font-medium text-gray-600 ">Remove</p>
      </div>
      <hr className="bg-gray-200 h-0.5 border-none mt-2" />
      <div>
        {all_products.map((product, index) => {
          const quantity = cartItems[index];
          if (quantity > 0) {
            return (
              <div key={index} className="grid grid-cols-6 gap-4 py-2 items-center min-h-52">
                <img src={product.image} alt={product.name} className="w-36" />
                <p className="text-gray-600 text-sm">{product.name}</p>
                <p className="text-gray-600 text-sm">Tsh. {product.old_price}</p>
                <p className="text-gray-600 text-sm">{quantity}</p>
                <p className="text-gray-600 text-sm">Tsh. {(product.old_price - product.old_price * product.discount) * quantity}</p>

                <span onClick={() => removeFromCart(index)} className="cursor-pointer">
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#9b9b9b" fill="none">
                    <path d="M16 12L8 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                  </svg>
                </span>
              </div>
            );
          }
          return null;
        })}
      </div>

      <hr className="bg-gray-200 h-0.5 border-none my-2" />
      <div className="flex flex-col items-end my-5">
        <p className="text-gray-600 text-md font-medium mb-4">Cart Total: Tsh. {getTotalCartAmount()}</p>
        <Link to="/payment" className="bg-red-500 text-white px-12 py-2 rounded-full cursor-pointer">
          Continue to Pay
        </Link>
      </div>
    </div>
  );
};

export default CartItems;
