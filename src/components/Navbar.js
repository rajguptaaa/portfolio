import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.nav 
      className="bg-white dark:bg-gray-800 shadow-lg fixed w-full z-50 transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="font-mono text-xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            &lt;Portfolio/&gt;
          </motion.div>
          
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">Home</a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">Skills</a>
            <a href="#education" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">Education</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">Projects</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">Contact</a>
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </motion.div>

          <motion.div 
            className="md:hidden flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
            <motion.button 
              className="text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Home</a>
                <a href="#about" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Skills</a>
                <a href="#education" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Education</a>
                <a href="#projects" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Projects</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;