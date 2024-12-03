import React from "react";

const ThreeBanners = () => {
  return (
    <div className="p-4 md:mx-8 ">
      {/* Banner Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Banner 1 */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1588689115724-a624efec3c93?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Banner 1"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center text-white text-xl font-semibold">
            <p className="">Limited Time Flash Sale!</p>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1620332326501-584c3d6bf607?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Banner 1"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center text-white text-xl font-semibold">
            <p className="">Buy One, Get One Free!</p>
          </div>
        </div>

        {/* Banner 3 */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Banner 3"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center text-white text-xl font-semibold">
            <p className="">Exclusive Member Discounts!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeBanners;
