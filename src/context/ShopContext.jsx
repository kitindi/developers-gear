import { createContext, useState, useEffect } from "react";
import { all_products } from "../assets/all_products";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
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
  const [userData, setUserData] = useState({ username: "", role: "" });
  const [cartOpen, setCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

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

  // get token payload

  // Function to get the user's name from the token
  const getUserNameFromToken = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
      const decoded = jwtDecode(token);
      return { name: decoded.name, role: decoded?.role }; // Assuming the user's name is stored in the token as "name"
      // Assuming the user's name is stored in the token as "name"
      // console.log(decoded);
    } catch (err) {
      console.error("Failed to decode token:", err);
      return null;
    }
  };

  //  fetch all products

  const getAllProducts = async () => {
    await axios
      .get("http://localhost:4000/api/product") // Replace with your actual backend URL
      .then((response) => {
        console.log("Fetched Products:", response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  // Fetch the user's name from the token when the component mounts
  useEffect(() => {
    const data = getUserNameFromToken();
    if (data) {
      setUserData({ username: data.name, role: data.role });
    }
    getAllProducts();
  }, []);

  console.log("User Data:", userData);
  const { username, role } = userData;
  const contextValue = {
    all_products,
    products,
    cartItems,
    setCartItems,
    cartOpen,
    setCartOpen,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    username,
    role,
    showModal,
    handleShowModal,
  };
  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
