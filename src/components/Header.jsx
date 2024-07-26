import React from "react";
import logo from "../assets/logo.jpg"; // Replace with the correct path to your logo image

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <div>
        <img src={logo} alt="Logo" className="h-28" />
      </div>
      <nav className="flex space-x-6">
        <a
          href="#"
          className="text-gray-700 xl:text-2xl hover:text-blue-600 font-bold"
        >
          About
        </a>
        <a
          href="#"
          className="text-gray-700 xl:text-2xl hover:text-blue-600 font-bold"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
