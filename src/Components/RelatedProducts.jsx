import React, { useState, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";

const RelatedProducts = ({ data }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 250; // The amount to scroll on each button click

    // Check the container's scroll width and scroll position to limit scrolling
    if (direction === "left") {
      if (scrollPosition > 0) {
        setScrollPosition(scrollPosition - scrollAmount);
      }
    } else if (direction === "right") {
      if (scrollPosition < container.scrollWidth - container.clientWidth) {
        setScrollPosition(scrollPosition + scrollAmount);
      }
    }
  };

  return (
    <div className="container mx-auto mt-16 px-6 mb-10 ">
      <h2 className="text-2xl font-semibold mb-4">Related Products</h2>

      {/* Arrow Slider for larger screens */}
      <div className="relative">
        {/* <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full"
        >
          <FaAngleLeft />
        </button> */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hidden transition-all duration-500 scroll-container"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {data.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="flex-shrink-0 w-[250px] bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={relatedProduct.img}
                alt={relatedProduct.name}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl truncate">
                  {relatedProduct.name}
                </h3>
                <p className="text-gray-500">
                  ₹{relatedProduct.price.toFixed(2)}
                </p>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <IoStarOutline key={index} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 p-2 rounded-full"
        >
          <FaAngleRight />
        </button> */}
      </div>
    </div>
  );
};

export default RelatedProducts;
