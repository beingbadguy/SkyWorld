import React from "react";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "OPPO Find X8 Pro",
      price: 99999,
      originalPrice: 109999,
      offer: "NCEMI up to 24 Months & Exchange Bonus up to ₹8,000",
      image:
        "https://images.unsplash.com/photo-1544279976-e1063339f9be?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "GIFT",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: 119999,
      originalPrice: 129999,
      offer: "No Cost EMI & Free Accessories",
      image:
        "https://images.unsplash.com/photo-1550792173-5220eacae50e?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "NEW",
    },
    {
      id: 3,
      name: "iPhone 15 Pro Max",
      price: 139999,
      originalPrice: 149999,
      offer: "Trade-In & Get ₹10,000 Discount",
      image:
        "https://images.unsplash.com/photo-1548960254-5139d80bd5ec?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "HOT",
    },
    {
      id: 3,
      name: "Sony Ericson",
      price: 139999,
      originalPrice: 149999,
      offer: "Trade-In & Get ₹10,000 Discount",
      image:
        "https://images.unsplash.com/photo-1522273500616-6b4757e4c184?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "HOT",
    },
    {
      id: 3,
      name: "iPhone 12 Pro Max",
      price: 139999,
      originalPrice: 149999,
      offer: "Trade-In & Get ₹10,000 Discount",
      image:
        "https://images.unsplash.com/photo-1609692814902-882dd8e267e2?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "HOT",
    },
  ];

  return (
    <div className=" px-4 md:px-12 py-6">
      <h2 className="text-3xl font-bold  mb-8">Shop by Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
        {products.map((p, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center flex-col gap-4 bg-gray-100 p-7 rounded"
          >
            <div className="absolute top-0 right-0 p-2 text-pink-400">
              {p.tag}
            </div>
            <div className="w-36 h-36 sm:h-48 sm:w-48 md:h-54 md:w-54  flex items-center justify-center rounded-full  overflow-hidden">
              <img src={p.image} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <p className="md:text-xl font-semibold text-gray-700">{p.name}</p>
              <div className="flex gap-2">
                <p className="text-sm font-semibold text-pink-400">
                  ₹{p.price}
                </p>
                <p className="text-sm font-semibold text-gray-400 line-through">
                  ₹{p.originalPrice}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
