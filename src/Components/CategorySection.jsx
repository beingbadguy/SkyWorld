import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CategorySection = () => {
  const navigate = useNavigate();
    const location = useLocation();

  const categories = [
    {
      name: "Smart Phones",
      image:
        "url('https://images.unsplash.com/photo-1623743993875-03d6a5c7c709?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    },
    {
      name: "Technology Toys",
      image:
        "url('https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    },
    {
      name: "Jewelry",
      image:
        "url('https://images.unsplash.com/photo-1626122780071-c09d403b8e32?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    },
    {
      name: "Health & Beauty",
      image:
        "url('https://images.unsplash.com/photo-1616995837161-e09185d6b907?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    },
    {
      name: "Computers",
      image:
        "url('https://images.unsplash.com/uploads/14125120591540eb48427/c1c4b1aa?q=80&w=2558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    },
    {
      name: "Fashion",
      image:
        "url('https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="px-4 md:px-12 py-6">
      <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-col gap-4 relative group"
            onClick={() => {
              navigate(`/products`);
            }}
          >
            {/* Category Image */}
            <div
              className="w-36 h-36 sm:h-48 sm:w-48 md:h-54 md:w-54 bg-cover bg-center rounded-full"
              style={{ backgroundImage: cat.image }}
            ></div>

            {/* Category Name */}
            <p className="md:text-xl font-semibold text-gray-700">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
