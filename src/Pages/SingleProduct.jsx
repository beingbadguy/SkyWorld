import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContextStore } from "../Store/StoreContext";
import { IoCartSharp, IoHeart, IoStar, IoStarOutline } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";

const SingleProduct = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { data } = useContext(ContextStore);

  // Find the product by name
  const product = data.find((product) => product.name === name);

  // State to manage quantity
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">Product not found.</p>
      </div>
    );
  }

  const renderRating = (rating) => {
    return (
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, index) =>
          index < rating ? (
            <IoStar key={index} className="text-yellow-400" />
          ) : (
            <IoStarOutline key={index} className="text-yellow-400" />
          )
        )}
      </div>
    );
  };

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "increase" ? prev + 1 : Math.max(prev - 1, 1)
    );
  };

  return (
    <div>
      <div className="bg-gray-200 p-4 flex items-center gap-1 absolute w-full top-[64px] md:top-[70px] lg:top-[120px]">
        <p
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </p>
        <MdChevronRight className="text-xl" />
        <p className="text-pink-500">Product</p>
        <MdChevronRight className="text-xl" />
        <p className="text-pink-500">{name}</p>
      </div>
      <div className="container mx-auto p-6 mt-14">
        <div className="flex flex-col md:flex-row items-start justify-evenly gap-8">
          {/* Product Image */}
          <div>
            <img
              src={product.img} // Ensure your product object includes an image URL
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 flex items-start justify-between flex-col">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <p className="text-gray-600 mb-6">{product.brand}</p>
            <div className="mb-6">{renderRating(product.rating || 0)}</div>
            <p className="text-2xl font-semibold text-green-600 mb-4">
              ₹{product.price.toFixed(2)}
            </p>
            <p className="text-gray-400 line-through mb-4">
              ₹{product.original_price.toFixed(2)}
            </p>

            {/* Quantity Control */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  className="bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-400 transition"
                >
                  -
                </button>
                <div className="p-2 w-10 g-10 flex items-center justify-center border border-gray-300 rounded">
                  {quantity}
                </div>
                <button
                  onClick={() => handleQuantityChange("increase")}
                  className="bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-400 transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <button className="bg-yellow-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-yellow-700 transition">
                <IoCartSharp className="inline-block mr-2" /> Add to Cart
              </button>
              <button className="bg-pink-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-pink-600 transition">
                <IoHeart className="inline-block mr-2" /> Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
