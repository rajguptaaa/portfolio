import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaHeart, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="w-full mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-mono text-xl font-bold mb-4 text-white">
              &lt;Portfolio/&gt;
            </h3>
            <p className="text-gray-400 mb-4">
              Building innovative solutions with modern technologies and passionate about creating impactful digital experiences.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <FaHeart className="text-red-500 mx-2" />
              <span>and</span>
              <FaCode className="text-blue-500 mx-2" />
              <span>by Raj Gupta</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">Home</a>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">Skills</a>
                <a href="#education" className="block text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">Education</a>
              </div>
              <div className="space-y-2">
                <a href="#projects" className="block text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">Projects</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">Contact</a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-4 text-white">Connect With Me</h4>
            <p className="text-gray-400 text-sm mb-4">
              Let's connect and build something amazing together!
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/raj-guptaaa/" 
                className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-blue-500 hover:bg-gray-700 transition-all duration-300 hover:scale-110" 
                target='_blank' 
                rel='noreferrer'
                title="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="https://github.com/rajguptaaa/" 
                className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110" 
                target='_blank' 
                rel='noreferrer'
                title="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://leetcode.com/u/raj_gupta_45/" 
                className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-orange-500 hover:bg-gray-700 transition-all duration-300 hover:scale-110" 
                target='_blank' 
                rel='noreferrer'
                title="LeetCode"
              >
                <SiLeetcode className="text-xl" />
              </a>
              <a 
                href="https://www.instagram.com/raj_jay_gupta/" 
                className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-pink-500 hover:bg-gray-700 transition-all duration-300 hover:scale-110" 
                target='_blank' 
                rel='noreferrer'
                title="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Raj Gupta. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Designed & Developed with passion 🚀
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;