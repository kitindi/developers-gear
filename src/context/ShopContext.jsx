import { createContext, useState } from "react";
import { all_products } from "../assets/all_products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (itemIndex) => {
    setCartItems((prevCartItems) => {
      return { ...prevCartItems, [itemIndex]: prevCartItems[itemIndex] + 1 };
    });
  };

  const removeFromCart = (itemIndex) => {
    setCartItems((prevCartItems) => {
      return { ...prevCartItems, [itemIndex]: prevCartItems[itemIndex] - 1 };
    });
  };

  // calculate total cart amount

  const getTotalCartAmount = () => {
    let total = 0;
    for (let index = 0; index < all_products.length; index++) {
      total += all_products[index].old_price * cartItems[index] * (1 - all_products[index].discount);
    }
    return total;
  };
  const contextValue = { all_products, cartItems, setCartItems, cartOpen, setCartOpen, addToCart, removeFromCart, getTotalCartAmount };
  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
