import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="font-mono text-xl font-bold">
            &lt;Portfolio/&gt;
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-black transition">Home</a>
            <a href="#about" className="text-gray-700 hover:text-black transition">Skills</a>
            <a href="#education" className="text-gray-700 hover:text-black transition">Education</a>
            <a href="#projects" className="text-gray-700 hover:text-black transition">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-black transition">Contact</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700">Skills</a>
              <a href="#education" className="block px-3 py-2 text-gray-700">Education</a>
              <a href="#achievements" className="block px-3 py-2 text-gray-700">Achievements</a>
              <a href="#projects" className="block px-3 py-2 text-gray-700">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;