import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MapPin, CreditCard } from "lucide-react";
import toast from "react-hot-toast";

export default function Payment() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    for (let key in form) {
      if (!form[key]) {
        toast.error("Please fill all required fields");
        return;
      }
    }

    toast.success("Order placed successfully!");

    setTimeout(() => {
      navigate("/products");
    }, 1500);
  };

  return (
    <div className="pt-20 px-10 pb-16">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-8">
          {/* SHIPPING ADDRESS */}
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-emerald-600" size={20} />
              <h2 className="text-xl font-semibold text-gray-800">
                Shipping Address
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md h-11 px-4"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md h-11 px-4"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-gray-700 mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md h-11 px-4"
                placeholder="123 Main St"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
              <div>
                <label className="block text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md h-11 px-4"
                  placeholder="New York"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">State</label>
                <input
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md h-11 px-4"
                  placeholder="NY"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Zip Code</label>
                <input
                  type="text"
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md h-11 px-4"
                  placeholder="10001"
                />
              </div>
            </div>
          </div>

          {/* PAYMENT DETAILS */}
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="text-emerald-600" size={20} />
              <h2 className="text-xl font-semibold text-gray-800">
                Payment Details
              </h2>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={form.cardNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md h-11 px-4"
                placeholder="1234 5678 9012 3456"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
              <div>
                <label className="block text-gray-700 mb-1">
                  Expiry Date (MM/YY)
                </label>
                <input
                  type="text"
                  name="expiry"
                  value={form.expiry}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md h-11 px-4"
                  placeholder="12/25"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={form.cvv}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md h-11 px-4"
                  placeholder="123"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="border border-gray-200 rounded-lg shadow-sm p-6 h-fit">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Order Summary
          </h2>

          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <span>Smart Watch × 1</span>
              <span>$299.99</span>
            </div>
            <div className="flex justify-between">
              <span>Wireless Earbuds × 1</span>
              <span>$149.99</span>
            </div>
            <div className="flex justify-between">
              <span>Premium Laptop × 1</span>
              <span>$1299.99</span>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between font-medium">
              <span>Subtotal</span>
              <span>$1749.97</span>
            </div>

            <div className="flex justify-between font-medium">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between font-bold text-lg text-emerald-600">
              <span>Total</span>
              <span>$1754.97</span>
            </div>
          </div>

          <button
            onClick={placeOrder}
            className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-md"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
