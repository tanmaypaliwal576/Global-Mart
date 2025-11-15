import React, { useState } from "react";
import { Search, ChevronDown, ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";

export default function Products() {
  const [search, setSearch] = useState("");

  const products = [
    {
      name: "Wireless Headphones",
      category: "Audio",
      price: 199.99,
      img: "https://i.imgur.com/nKcKQYB.png",
    },
    {
      name: "Smart Watch",
      category: "Wearables",
      price: 299.99,
      img: "https://i.imgur.com/657D7cv.png",
    },
    {
      name: "Wireless Earbuds",
      category: "Audio",
      price: 149.99,
      img: "https://i.imgur.com/xNq5y6V.png",
    },
    {
      name: "Premium Laptop",
      category: "Computers",
      price: 1299.99,
      img: "https://i.imgur.com/mC9ZK6c.png",
    },
    {
      name: "Professional Camera",
      category: "Photography",
      price: 899.99,
      img: "https://i.imgur.com/s1vOGYw.png",
    },
    {
      name: "Smartphone Pro",
      category: "Mobile",
      price: 799.99,
      img: "https://i.imgur.com/iv6Z3zJ.png",
    },
  ];

  const handleAddToCart = (productName) => {
    toast.success(`${productName} added to cart!`);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* PAGE TITLE */}
      <div className="pt-24 px-10">
        <h1 className="text-3xl font-bold">Our Products</h1>

        {/* SEARCH + FILTER */}
        <div className="flex items-center gap-4 mt-6">
          <div className="flex items-center w-full border rounded-lg px-3 py-2 shadow-sm">
            <Search size={18} className="text-gray-500" />
            <input
              className="w-full ml-2 outline-none text-sm"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="border rounded-lg px-3 py-2 flex items-center gap-2 text-sm shadow-sm cursor-pointer">
            All
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-10">
        {products
          .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
          .map((p, i) => (
            <div
              key={i}
              className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white"
            >
              {/* PRODUCT IMAGE */}
              <div className="w-full h-60 bg-gray-100 flex items-center justify-center">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full object-contain"
                />
              </div>

              {/* PRODUCT CONTENT */}
              <div className="p-4">
                <h2 className="font-semibold">{p.name}</h2>
                <p className="text-sm text-gray-500">{p.category}</p>

                <p className="text-emerald-600 font-bold text-lg mt-2">
                  ${p.price}
                </p>

                {/* ADD TO CART BUTTON */}
                <button
                  onClick={() => handleAddToCart(p.name)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 mt-4 rounded-md text-sm flex items-center justify-center gap-2 transition"
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
