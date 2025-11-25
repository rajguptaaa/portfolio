import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaDownload, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import image from '../assets/hello2.jpeg';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="relative w-64 h-80 mx-auto"
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg transform rotate-6"></div>
              <div className="relative w-full h-full bg-gray-300 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={image}
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="font-mono text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                &lt;Raj Gupta&gt;
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Aspiring Software Engineer (he/him)
              </p>
              
              <motion.div 
                className="flex justify-center space-x-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button 
                  onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 shadow-lg"
                >
                  <FaEnvelope />
                  <span>Email me</span>
                </button>
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume.pdf';
                    link.download = 'Raj_Gupta_Resume.pdf';
                    link.click();
                  }}
                  className="bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-300 flex items-center space-x-2 shadow-lg"
                >
                  <FaDownload />
                  <span>Resume</span>
                </button>
              </motion.div>

              <motion.div 
                className="flex justify-center space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a href="https://www.linkedin.com/in/raj-guptaaa/" className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110" target='_blank' rel='noreferrer'>
                  <FaLinkedin />
                </a>
                <a href="https://github.com/rajguptaaa/" className="text-2xl text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-all duration-300 hover:scale-110" target='_blank' rel='noreferrer'>
                  <FaGithub />
                </a>
                <a href="https://leetcode.com/u/raj_gupta_45/" className="text-2xl text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-all duration-300 hover:scale-110" target='_blank' rel='noreferrer'>
                  <SiLeetcode />
                </a>
                <a href="https://www.instagram.com/raj_jay_gupta/" className="text-2xl text-gray-600 dark:text-gray-400 hover:text-pink-500 transition-all duration-300 hover:scale-110" target='_blank' rel='noreferrer'>
                  <FaInstagram />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="mb-8">
              <h2 className="font-mono text-4xl font-bold mb-4 text-center md:text-left text-gray-900 dark:text-white">
                &lt;/About Me&gt;
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto md:mx-0 rounded-full"></div>
            </div>
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center md:text-left">
                I'm a final-year B.Tech Computer Science student with a strong passion for full-stack web development and building scalable, user-friendly applications.
                I have hands-on experience with the MERN stack (MongoDB, Express.js, React, Node.js), and enjoy working on both the frontend and backend of applications. I've built several projects ranging from AI Text to image generator, Spotify and Gemini Clones, to E-Commerce webpage, and I'm constantly learning through platforms like LeetCode and GitHub.
                I'm also comfortable working with REST APIs, version control (Git), and have a good grasp of data structures and algorithms.
                Currently, I'm seeking internship or full-time opportunities where I can contribute to meaningful projects, grow as a developer, and learn from experienced teams.
                Let's connect — I'm always open to opportunities, collaborations, and conversations!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;