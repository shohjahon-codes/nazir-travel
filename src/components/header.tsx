"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white bg-opacity-95 sticky top-0 left-0 z-50 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-orange-500 text-2xl md:text-xl sm:text-lg font-bold">
         Nazir Travel
        </h1>
        <div className="flex items-center lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 text-2xl cursor-pointer"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex lg:space-x-8">
          <ul className="flex space-x-8 font-bold">
            <li className="text-gray-700 hover:border-b-2 hover:border-orange-500">
              <Link href="/">Home</Link>
            </li>
            <li className="text-gray-700 hover:border-b-2 hover:border-orange-500">
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="text-gray-700 hover:border-b-2 hover:border-orange-500">
              <Link href="/tour-packages">Tour Packages</Link>
            </li>
            <li className="text-gray-700 hover:border-b-2 hover:border-orange-500">
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <span className="text-gray-800">Eng</span>
          <a href="#" className="text-gray-800 hover:text-orange-500">
            Login
          </a>
          <a
            href="#"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Background Blur Effect */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-md z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 lg:hidden flex flex-col p-6`}
      >
        <button
          onClick={toggleMenu}
          className="text-white text-2xl self-end"
          aria-label="Close Menu"
        >
          ✕
        </button>
        <nav className="flex flex-col space-y-6 mt-4 text-left">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/tour-packages">Tour Packages</Link>
          <Link href="/contact-us">Contact Us</Link>
        </nav>
       
      </div>
    </header>
  );
};

export default Header;
