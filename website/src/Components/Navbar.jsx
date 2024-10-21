import React, { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <a href="/"><span className='text-white'>Foot</span>prints</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/all" className="text-white hover:text-gray-200 transition duration-300">All</a>
          <a href="/premium" className="text-white hover:text-gray-200 transition duration-300">Premium</a>
          <a href="/formal" className="text-white hover:text-gray-200 transition duration-300">Formal</a>
          <a href="/casual" className="text-white hover:text-gray-200 transition duration-300">Casual</a>
          <a href="/contact" className="text-white hover:text-gray-200 transition duration-300">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <a href="/search" className="text-white hover:text-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </a>
          <a href="/cart" className="relative text-white hover:text-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1 5h12l-1-5M5 21h14a2 2 0 002-2H3a2 2 0 002 2z"></path>
            </svg>
            <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">3</span>
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white hover:text-gray-200 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2">
            <a href="/all" className="block py-2 text-gray-800 hover:text-gray-600">All</a>
            <a href="/premium" className="block py-2 text-gray-800 hover:text-gray-600">Premium</a>
            <a href="/formal" className="block py-2 text-gray-800 hover:text-gray-600">Formal</a>
            <a href="/casual" className="block py-2 text-gray-800 hover:text-gray-600">Casual</a>
            <a href="/contact" className="block py-2 text-gray-800 hover:text-gray-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};


