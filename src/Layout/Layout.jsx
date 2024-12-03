import React, { useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { BsBagHeart, BsCart } from "react-icons/bs";
import { CiHeart, CiMenuBurger, CiSearch } from "react-icons/ci";
import { IoIosClose, IoMdHeartEmpty } from "react-icons/io";
import { IoCloseOutline, IoSearch } from "react-icons/io5";
import { FaAngleDown, FaRegHeart, FaRegUser } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { SlUser } from "react-icons/sl";
import { FiUser } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";

const Layout = () => {
  const [activeSidebar, setActiveSidebar] = useState(""); // Manages the active sidebar ("menu", "categories", "search", "cart")
  const [showSearch, setShowSearch] = useState(false);

  const [search, setSearch] = useState("");

  const toggleSidebar = (type) => {
    if (activeSidebar === type) {
      setActiveSidebar(""); // Close if the same sidebar is active
      document.body.style.overflow = "auto"; // Enable scroll
    } else {
      setActiveSidebar(type); // Open the sidebar
      document.body.style.overflow = "hidden"; // Disable scroll
    }
  };

  const closeSidebar = () => {
    setActiveSidebar(""); // Close all sidebars
    document.body.style.overflow = "auto"; // Enable scroll
  };

  return (
    <div className="select-none">
      {/* Header */}
      {/* Header */}
      <div className="">
        <div className="p-5 md:p-4 bg-pink-500  text-white flex items-center justify-between md:px-12 fixed w-full z-[999] ">
          {/* Logo */}
          <div className="text-xl md:text-3xl cursor-pointer">
            <BsBagHeart />
          </div>

          {/* Desktop Search Bar */}
          <div className="border text-black w-[40%] items-center rounded hidden md:flex">
            <div className="p-2 bg-gray-100 flex items-center gap-2">
              <p>All</p>
              <FaAngleDown />
            </div>
            <input
              type="text"
              value={search}
              className="p-2 outline-none border-none w-full"
              placeholder="I'm Shopping for..."
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <div className="p-3 bg-gray-100 cursor-pointer">
              <IoSearch />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 md:gap-8 text-2xl md:text-3xl ">
            <div
              className=" md:hidden cursor-pointer "
              onClick={() => {
                setShowSearch(true);
              }}
            >
              <GoSearch />
            </div>
            <div className="relative hidden md:block cursor-pointer">
              <IoMdHeartEmpty />
              <span className="absolute top-4 -right-2 text-sm bg-black p-1 rounded-full h-6 w-6 flex items-center justify-center text-white">
                0
              </span>
            </div>
            <div className="relative cursor-pointer">
              <BsCart />
              <span className="absolute -top-2  -right-1 md:top-4 md:-right-2 text-sm bg-black p-1 rounded-full h-5 w-5 md:h-6 md:w-6 flex items-center justify-center text-white">
                0
              </span>
            </div>
            <div className="cursor-pointer">
              <FiUser />
            </div>
          </div>
        </div>
        <div className=" items-center justify-between p-4 fixed mt-[70px] w-full bg-white z-[999]  hidden lg:flex">
          <div>
            <p>Shop By Categories</p>
          </div>
          <ul className="flex items-center justify-center gap-8 ">
            <li className="hover:text-pink-500 cursor-pointer hover:font-bold transition-all duration-200">
              Home
            </li>
            <li className="hover:text-pink-500 cursor-pointer hover:font-bold transition-all duration-200">
              Shop
            </li>
            <li className="hover:text-pink-500 cursor-pointer hover:font-bold transition-all duration-200">
              Blog
            </li>
            <li className="hover:text-pink-500 cursor-pointer hover:font-bold transition-all duration-200">
              Faqs
            </li>
            <li className="hover:text-pink-500 cursor-pointer hover:font-bold transition-all duration-200">
              Contact
            </li>
          </ul>
          <div>Sell On Martfury | Track your order</div>
        </div>
        {/* Search Bar Below Navbar for Smaller Screens */}
        {!activeSidebar && (
          <div
            className={` ${
              showSearch ? "flex" : "hidden"
            } md:hidden px-4 py-2 fixed top-[56px] w-full  shadow-md z-[999]  items-center p-4 bg-white`}
          >
            <input
              type="text"
              placeholder="I'm Shopping for..."
              className="w-full p-2  border-b-2 border-black outline-none  "
            />
            <div className="p-2 absolute right-12 text-2xl cursor-pointer">
              <IoSearch />
            </div>
            <div
              className="p-2 absolute right-3 text-3xl cursor-pointer"
              onClick={() => {
                setShowSearch(false);
                setSearch("");
              }}
            >
              <MdOutlineClose />
            </div>
          </div>
        )}
      </div>

      {/* Floating Nav */}
      <div className="p-4 bg-gray-200 w-full fixed bottom-0 md:hidden flex justify-evenly text-2xl sm:text-3xl border-t-1 border-black text-center gap-2 z-[999]">
        <div
          className="flex items-center justify-center flex-col"
          onClick={() => toggleSidebar("menu")}
        >
          <CiMenuBurger />
          <p className="text-sm sm:text-lg">Menu</p>
        </div>
        <div
          className="flex items-center justify-center flex-col"
          onClick={() => toggleSidebar("categories")}
        >
          <BiCategoryAlt />
          <p className="text-sm sm:text-lg">Categories</p>
        </div>
        <div
          className="flex items-center justify-center flex-col"
          onClick={() => toggleSidebar("search")}
        >
          <IoSearch />
          <p className="text-sm sm:text-lg">Search</p>
        </div>
        <div
          className="flex items-center justify-center flex-col"
          onClick={() => toggleSidebar("cart")}
        >
          <BsCart />
          <p className="text-sm sm:text-lg">Cart</p>
        </div>
      </div>

      {/* Overlay */}
      {activeSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-[9999] bg-white w-[75%] h-screen  transform ${
          activeSidebar ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500`}
      >
        <div className="flex justify-between p-4 border-b ">
          <h2 className="text-lg font-semibold">
            {activeSidebar === "menu" && "Menu"}
            {activeSidebar === "categories" && "Categories"}
            {activeSidebar === "search" && "Search"}
            {activeSidebar === "cart" && "Cart"}
          </h2>
          <IoIosClose
            className="text-3xl cursor-pointer"
            onClick={closeSidebar}
          />
        </div>
        <div className="p-4">
          {activeSidebar === "menu" && <p>Menu Content</p>}
          {activeSidebar === "categories" && <p>Categories Content</p>}
          {activeSidebar === "search" && (
            <div className="flex">
              <input
                type="text"
                className="p-2 outline-none border w-full"
                placeholder="I'm Shopping for..."
              />
              <div className="p-3 bg-gray-300">
                <IoSearch />
              </div>
            </div>
          )}
          {activeSidebar === "cart" && <p>Cart Content</p>}
        </div>
      </div>

      {/* Main Content */}
      <div className=" pt-[90px] md:pt-[120px]">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 text-black py-10 px-12 mb-10 md:mb-0">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>Call us 24/7</p>
            <p className="mb-2">+91 8564903343</p>
            <p>Semra, Sahjanwa, Gorakhpur,</p>
            <p>Uttar Pradesh 273209</p>
            <p className="mt-2">Email: sunilgupta1577.skg@gmail.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>Terms Of Use</li>
              <li>Refund Policy</li>
              <li>FAQs</li>
              <li>About Us</li>
              <li>Career</li>
              <li>Our Blog</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li>Consumer Electronics</li>
              <li>Clothing & Apparel</li>
              <li>Home & Kitchen</li>
              <li>Health & Beauty</li>
              <li>Computer & Tech</li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center">
          &copy; 2021-2024 Sky World. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
