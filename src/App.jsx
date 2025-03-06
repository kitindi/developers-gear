import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignUp from "./pages/LoginSignUp";
function App() {
  return (
    <div className="py-4">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/electronics" element={<ShopCategory category="electronics" />} />
          <Route path="/mobile" element={<ShopCategory category="mobile" />} />
          <Route path="/living" element={<ShopCategory category="living" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
