import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const slideVariants = {
    hiddenLeft: { opacity: 0, x: -60 },
    hiddenRight: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
    exitLeft: { opacity: 0, x: -60 },
    exitRight: { opacity: 0, x: 60 },
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-emerald-50 to-emerald-100 px-4 font-[Poppins]">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl backdrop-blur-xl bg-white/80 border border-white/40 relative">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">
          <span className="text-emerald-600">
            {isLogin ? "Welcome Back" : "Create Account"}
          </span>
        </h2>

        {/* Animation Wrapper */}
        <AnimatePresence mode="wait">
          {isLogin ? (
            // ----------------------------------------
            // LOGIN FORM
            // ----------------------------------------
            <motion.div
              key="login"
              variants={slideVariants}
              initial="hiddenLeft"
              animate="visible"
              exit="exitRight"
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <form className="space-y-5">
                <div>
                  <label className="text-gray-700 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="text-gray-700 font-medium">Password</label>
                  <input
                    type="password"
                    className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    placeholder="Enter password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg text-lg font-semibold shadow hover:bg-emerald-700 transition"
                >
                  Login
                </button>
              </form>
            </motion.div>
          ) : (
            // ----------------------------------------
            // SIGNUP FORM
            // ----------------------------------------
            <motion.div
              key="signup"
              variants={slideVariants}
              initial="hiddenRight"
              animate="visible"
              exit="exitLeft"
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <form className="space-y-5">
                <div>
                  <label className="text-gray-700 font-medium">Full Name</label>
                  <input
                    type="text"
                    className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="text-gray-700 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="text-gray-700 font-medium">Password</label>
                  <input
                    type="password"
                    className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    placeholder="Create password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg text-lg font-semibold shadow hover:bg-emerald-700 transition"
                >
                  Sign Up
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle */}
        <p className="text-center mt-6 text-gray-700 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            className="text-emerald-600 font-semibold ml-1 hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Create one" : "Login instead"}
          </button>
        </p>

        {/* Back to Home */}
        <p className="text-center mt-4">
          <Link
            to="/"
            className="text-emerald-600 hover:underline font-medium text-sm"
          >
            ← Back to Dashboard
          </Link>
        </p>
      </div>
    </div>
  );
}
