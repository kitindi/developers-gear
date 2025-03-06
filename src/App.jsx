import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
