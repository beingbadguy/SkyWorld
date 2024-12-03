import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdArrowRight, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <div className="bg-gray-200 p-4 flex items-center gap-1 absolute w-full top-[64px] md:top-[70px] lg:top-[120px]">
        <p className="">Home</p>
        <MdChevronRight className="text-xl" /> <p className="text-pink-500">Login</p>
      </div>
      <div className="flex items-center justify-center min-h-[76vh] bg-white ">
        <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg border">
          <h2 className="text-3xl font-bold text-center text-black mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-black text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full p-3 border-2  rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6 relative">
              <label
                htmlFor="password"
                className="block text-black text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full p-3 border-2  rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your password"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-[55px] text-2xl transform -translate-y-1/2 cursor-pointer text-pink-500"
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition duration-200"
            >
              Login
            </button>
            <p className="mt-2">
              Don't have an account?{" "}
              <span>
                {" "}
                <Link to={"/signup"}>Signup</Link>{" "}
              </span>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;