import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 text-black my-10 py-10 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title and Description */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Download Sky World App Now!
        </h2>
        <p className="text-lg mb-6">
          Shop faster and more easily with our app. Get the link sent directly
          to your phone!
        </p>

        {/* Subscription Form */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-2/3 p-3 rounded-md text-black outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-md transition-all duration-300"
          >
            Subscribe
          </button>
        </form>

        {/* App Download Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#google-play"
            className="flex items-center gap-3 bg-black py-3 px-5 rounded-md hover:bg-gray-800 transition-all duration-300 w-48"
          >
            <FaGooglePlay className="text-white text-2xl" />
            <span className="text-white font-semibold">Google Play</span>
          </a>

          <a
            href="#app-store"
            className="flex items-center gap-3 bg-black py-3 px-5 rounded-md hover:bg-gray-800 transition-all duration-300 w-48"
          >
            <FaApple className="text-white text-2xl" />
            <span className="text-white font-semibold">App Store</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
