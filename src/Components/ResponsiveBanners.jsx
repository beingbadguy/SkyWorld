import React from "react";

const ResponsiveBanners = () => {
  return (
    <div className="flex flex-wrap gap-4 px-6 md:px-12 py-6">
      {/* Banner 1 */}
      <div className="flex-1 relative bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg overflow-hidden text-white shadow-md hover:shadow-lg transition-all duration-300">
        <img
          src="https://images.unsplash.com/photo-1531421331102-e5124fed6bc0?q=80&w=2460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Banner 1"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center p-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Big Sale 50% Off
          </h2>
          <p className=" hidden sm:block text-lg">
            On all electronics and gadgets!
          </p>
          <button className="sm:mt-4 bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-6 rounded-md">
            Shop 
          </button>
        </div>
      </div>

      {/* Banner 2 */}
      <div className="flex-1 relative bg-gradient-to-r from-green-500 to-teal-600 rounded-lg overflow-hidden text-white shadow-md hover:shadow-lg transition-all duration-300">
        <img
          src="https://images.unsplash.com/photo-1514043454212-14c181f46583?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Banner 2"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center p-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">New Arrivals</h2>
          <p className=" hidden sm:block text-lg">
            Discover the latest fashion trends!
          </p>
          <button className="sm:mt-4 bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-6 rounded-md">
            Explore 
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveBanners;
