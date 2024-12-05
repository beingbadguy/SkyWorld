import React, { useContext, useState } from "react";
import { ContextStore } from "../Store/StoreContext";
import { useNavigate } from "react-router-dom";
import Categories from "../Components/Categories";
import { RiSubtractFill } from "react-icons/ri";

const FilterPage = () => {
  const { data } = useContext(ContextStore); // Assuming 'data' contains your product details
  const navigate = useNavigate();
  const [collapse, setCollapse] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-4 gap-4">
        <img src="./pr1.webp" alt="" className=" " />
        <img src="./pr3.webp" alt="" className="" />
        <img src="./pr4.webp" alt="" className="" />
        <img src="./p2.webp" alt="" className="" />
      </div>

      <div className=" px-10 p-4 flex gap-2 flex-col md:flex-row ">
        {/* Filter Sidebar */}
        <div className="lg:w-1/4 w-full mb-8 lg:mb-0">
          <h2
            className="text-2xl font-semibold text-pink-500 mb-4 flex items-center justify-between "
            onClick={() => {
              setCollapse(!collapse);
            }}
          >
            Product Categories
            <p className="md:hidden">{collapse ? <RiSubtractFill /> : "+"}</p>
          </h2>
          <div
            className={`space-y-4 ${
              collapse ? " " : "h-0"
            } overflow-hidden transition-all duration-200 md:h-full`}
          >
            <div className="border-b pb-4">
              <h3 className="font-medium text-lg text-pink-500">Categories</h3>
              <Categories />
            </div>

            {/* Filter by Price */}
            <div className="border-b pb-4">
              <h3 className="font-medium text-lg text-pink-500">By Price</h3>
              <div className="flex  flex-col gap-2">
                <input
                  type="number"
                  className="border border-gray-300 p-2 rounded"
                  placeholder="Min"
                />
                <input
                  type="number"
                  className="border border-gray-300 p-2 rounded"
                  placeholder="Max"
                />
              </div>
            </div>

            {/* Filter by Size */}
            <div className="border-b pb-4">
              <h3 className="font-medium text-lg text-pink-500">By Size</h3>
              <div className="space-x-2">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    className="px-3 py-1 border border-gray-300 rounded text-sm"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="lg:w-3/4 w-full">
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">
            Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data &&
              data.map((product, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-lg hover:shadow-md cursor-pointer"
                  onClick={() => {
                    // Navigate to product page
                    navigate(`/product/${product.name}`);
                  }}
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full  object-cover rounded mb-4"
                  />
                  <h3
                    className="text-lg font-semibold text-pink-500 cursor-pointer"
                    onClick={() => {
                      // Navigate to product page
                      navigate(`/product/${product.name}`);
                    }}
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-bold ">₹{product.price}</p>
                    <p className="line-through ">₹{product.original_price}</p>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
