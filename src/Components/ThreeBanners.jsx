import React from "react";

const ThreeBanners = () => {
  return (
    <div className="p-4 md:mx-8 ">
      {/* Banner Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Banner 1 */}
        <div className="relative">
          <img
            src="./newBan.webp"
            alt="Banner 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="relative">
          <img
            src="./newBan1.webp"
            alt="Banner 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Banner 3 */}
        <div className="relative">
          <img
            src="./newBan2.webp"
            alt="Banner 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ThreeBanners;
