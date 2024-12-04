import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const menuData = [
  {
    title: "Home",
    submenus: ["Overview", "Updates", "Features"],
  },
  {
    title: "Products",
    submenus: [
      "New Arrivals",
      "Best Sellers",
      "Discounted Items",
      "All Products",
    ],
  },
  {
    title: "About Us",
    submenus: ["Company History", "Our Team", "Careers"],
  },
  {
    title: "Services",
    submenus: ["Consulting", "Support", "Custom Orders"],
  },
  {
    title: "Contact",
    submenus: ["Customer Support", "Feedback", "Locations"],
  },
  {
    title: "Blog",
    submenus: ["Latest Posts", "Popular Posts", "Category Archives"],
  },
  {
    title: "Account",
    submenus: ["Login", "Register", "My Account", "Logout"],
  },
  {
    title: "More",
    submenus: ["Sell On Martfury", "Track Your Order"],
  },
];

const Menu = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleMenu = (index) => {
    setExpandedMenu(expandedMenu === index ? null : index);
  };

  return (
    <div>
      {menuData.map((menu, index) => (
        <div key={index} className="border-b py-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleMenu(index)}
          >
            <p className="font-semibold">{menu.title}</p>
            {expandedMenu === index ? (
              <FaMinus className="text-gray-600" />
            ) : (
              <FaPlus className="text-gray-600" />
            )}
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expandedMenu === index ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <ul className="pl-4 mt-2 space-y-1 text-gray-700">
              {menu.submenus.map((submenu, subIndex) => (
                <li
                  key={subIndex}
                  className="hover:text-blue-500 cursor-pointer"
                >
                  {submenu}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
