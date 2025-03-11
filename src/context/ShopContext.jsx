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

    console.log(cartItems);
  };

  const removeFromCart = (itemIndex) => {
    setCartItems((prevCartItems) => {
      return { ...prevCartItems, [itemIndex]: prevCartItems[itemIndex] - 1 };
    });
  };

  const contextValue = { all_products, cartItems, setCartItems, cartOpen, setCartOpen, addToCart, removeFromCart };
  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
