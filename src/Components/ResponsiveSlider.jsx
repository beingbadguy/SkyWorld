import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ResponsiveSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["./ban1.webp", "./ban2.webp", "./ban3.webp", "./ban4.webp"];

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto change the slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(intervalId); // Cleanup interval on component unmount
    };
  }, []);

  return (
    <div className="mx-4 md:mx-12 ">
      {" "}
      <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
        {/* Slider Image */}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-md bg-black bg-opacity-50 p-2 rounded-full z-10"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-md bg-black bg-opacity-50 p-2 rounded-full z-10"
        >
          <FaChevronRight />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full bg-white ${
                index === currentIndex ? "bg-opacity-100" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSlider;
