import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Products from "./pages/ProductsList";
import Navbar from "./pages/Navbar";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar always visible */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

export default App;
