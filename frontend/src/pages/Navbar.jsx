import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-4 shadow-sm fixed top-0 bg-white z-20">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-2xl font-bold text-emerald-600 cursor-pointer">
          E-Shop
        </h1>
      </Link>

      {/* Navigation Links */}
      <ul className="flex gap-8 text-gray-600 font-medium">
        <Link to="/">
          <li className="cursor-pointer hover:text-emerald-500">Home</li>
        </Link>

        <Link to="/products">
          <li className="cursor-pointer hover:text-emerald-500">Shop</li>
        </Link>
      </ul>

      {/* Right Section → Login & Cart */}
      <div className="flex items-center gap-6">
        {/* Login/Register */}
        <Link
          to="/register"
          className="text-emerald-600 font-medium hover:text-emerald-700"
        >
          Login / Register
        </Link>

        {/* Cart Button */}
        <Link
          to="/cart"
          className="relative p-2 rounded-full border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition"
        >
          <ShoppingCart size={22} />
        </Link>
      </div>
    </nav>
  );
}
