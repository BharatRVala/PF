import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1a1a2e] backdrop-blur-md fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#ffcc00]">BV</h2>

        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <div
          className={`absolute md:relative top-full left-0 w-full md:w-auto bg-[#1a1a2e] md:bg-transparent flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 lg:space-x-6 p-4 md:p-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          {["Home", "About", "Contact"].map((page) => (
            <NavLink
              key={page}
              to={`/${page.toLowerCase()}`}
              className={({ isActive }) =>
                `block px-4 py-2 text-base sm:text-lg font-medium text-gray-300 hover:text-[#ffcc00] hover:scale-105 transition-all ${
                  isActive ? "text-[#ffcc00] underline" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {page}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Header;