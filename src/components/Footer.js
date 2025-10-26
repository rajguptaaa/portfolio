import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="w-full mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-mono text-xl font-bold mb-4">
              &lt;Portfolio/&gt;
            </h3>
            <p className="text-gray-400">
              Building innovative solutions with modern technologies.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-white transition">Home</a>
                <a href="#about" className="block text-gray-400 hover:text-white transition">Skills</a>
                <a href="#education" className="block text-gray-400 hover:text-white transition">Education</a>
              </div>
              <div className="space-y-2">
                <a href="#projects" className="block text-gray-400 hover:text-white transition">Projects</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition">Contact</a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/raj-guptaaa/" className="text-gray-400 hover:text-blue-500 transition text-xl" target='_blank' rel='noreferrer'>
                  <FaLinkedin />
                </a>
                <a href="https://github.com/rajguptaaa/" className="text-gray-400 hover:text-white transition text-xl" target='_blank' rel='noreferrer'>
                  <FaGithub />
                </a>
                <a href="https://leetcode.com/u/raj_gupta_45/" className="text-gray-400 hover:text-orange-500 transition text-xl" target='_blank' rel='noreferrer'>
                  <SiLeetcode />
                </a>
                <a href="https://www.instagram.com/raj_jay_gupta/" className="text-gray-400 hover:text-pink-500 transition text-xl" target='_blank' rel='noreferrer'>
                  <FaInstagram />
                </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Raj Gupta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;