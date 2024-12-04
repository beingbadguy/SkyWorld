import React from "react";
import {
  FaTruck,
  FaUndoAlt,
  FaShieldAlt,
  FaHeadset,
  FaGift,
} from "react-icons/fa";

const features = [
  {
    icon: <FaTruck className="text-blue-500 text-4xl" />,
    title: "Free Delivery",
    description: "For all orders over ₹ 999",
  },
  {
    icon: <FaUndoAlt className="text-green-500 text-4xl" />,
    title: "7 Days Return",
    description: "If goods have problems",
  },
  {
    icon: <FaShieldAlt className="text-yellow-500 text-4xl" />,
    title: "Secure Payment",
    description: "100% secure payment",
  },
  {
    icon: <FaHeadset className="text-red-500 text-4xl" />,
    title: "24/7 Support",
    description: "Dedicated support",
  },
  {
    icon: <FaGift className="text-purple-500 text-4xl" />,
    title: "Gift Service",
    description: "Support gift service",
  },
];

const FeatureCard = () => {
  return (
    <div className=" my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12  ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-4 p-8 border bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <div>{feature.icon}</div>
            <div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
