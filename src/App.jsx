import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import LoginSignUp from "./pages/LoginSignUp";
import Footer from "./components/Footer/Footer";
import SignupPage from "./pages/Signup";
import Payment from "./pages/Payment";
import SellerLogin from "./pages/SellerLogin";
import SellerRegister from "./pages/SellerRegister";
import Search from "./pages/Search";
import ProtectedRoute from "../ProtectedRoute";
import SellerDashboard from "./pages/SellerDashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Inventory from "./pages/Inventory";

function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Shop />} />
          {/* protected route */}
          <Route element={<ProtectedRoute />}>
            <Route path="/payment" element={<Payment />} />
            <Route path="/seller-dashboard" element={<SellerDashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/inventory" element={<Inventory />} />
          </Route>
          {/* Public routes */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/seller-login" element={<SellerLogin />} />
          <Route path="/seller-register" element={<SellerRegister />} />
          <Route path="/search" element={<Search />} />
          <Route path="/monitor" element={<ShopCategory category="monitor" title="Computer Monitors, Projectors & Accessories" link="Monitors" />} />
          <Route path="/keyboard_mice" element={<ShopCategory category="keyboard_mice" title="Computer Keyboards, Mice" link="Keyboards & Mice" />} />
          <Route path="/headphones" element={<ShopCategory category="headphones" title="Portable Audio & Headphones" link="Headphones" />} />
          <Route path="/laptop" element={<ShopCategory category="laptop" title="Laptop & Accessories" link="Laptops & Accessories" />} />
          <Route path="/desktop_pc" element={<ShopCategory category="desktop_pc" title="Desktops & All-In-One Computers" link="Desktop PC" />} />
          <Route
            path="/cables_charger"
            element={<ShopCategory category="cables_charger" title="Laptop Power Adapters & Chargers" link="Cables & Chargers" />}
          />
          <Route path="/desk_accessories" element={<ShopCategory category="desk_accessories" title="Office & Desk Accessories" link="Desk Accessories" />} />
          <Route path="/apparel" element={<ShopCategory category="apparel" title="Developer & Tech Pro Outlook" link="Tech Pro Apparel" />} />
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
