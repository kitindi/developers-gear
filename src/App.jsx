import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignUp from "./pages/LoginSignUp";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/electronics" element={<ShopCategory category="electronics" />} />
          <Route path="/mobile" element={<ShopCategory category="mobile" />} />
          <Route path="/furniture" element={<ShopCategory category="furniture" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <div className="fixed bottom-12 right-8 flex flex-col gap-4">
        <dv className="bg-white p-4 rounded-full shadow-lg cursor-pointer">
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#e02424" viewBox="0 0 256 256">
            <path d="M168,112a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,112Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm72-8A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"></path>
          </svg>
        </dv>
      </div>
    </div>
  );
}

export default App;
