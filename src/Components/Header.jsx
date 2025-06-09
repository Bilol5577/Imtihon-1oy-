import React from 'react'
import { FcLike } from "react-icons/fc";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
      <div className="flex items-center gap-10">
        <h1 className="text-2xl font-bold">Exclusive</h1>
        <nav className="flex ml-80 gap-10 text-sm text-gray-700">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">Contact</a>
          <a href="#" className="hover:text-black">About</a>
          <a href="#" className="hover:text-black">Sign Up</a>
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent outline-none text-sm w-48"
          />
          <FiSearch className="text-gray-500" />
        </div>

        <div className="relative">
          <FcLike size={20} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">4</span>
        </div>
        <MdProductionQuantityLimits size={22} />
        <IoMdPerson size={22} />
      </div>
    </header>
  );
};

export default Header;