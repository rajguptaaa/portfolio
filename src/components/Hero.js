import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import image from '../assets/hello2.jpeg';
const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen bg-gray-100 flex">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="w-64 h-80 mx-auto bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src={image}
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-center mt-8">
              <h1 className="font-mono text-3xl font-bold mb-2">
                &lt;Raj Gupta&gt;
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Aspiring Software Engineer (he/him)
              </p>
              
              <div className="flex justify-center space-x-4 mb-8">
                <button 
                  onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    setTimeout(() => {
                      window.location.href = 'mailto:kumaaraj11@gmail.com?subject=Hello&body=Hi, I would like to connect with you.';
                    }, 500);
                  }}
                  className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition"
                >
                  Email me
                </button>
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume.pdf';
                    link.download = 'Raj_Gupta_Resume.pdf';
                    link.click();
                  }}
                  className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition"
                >
                  Resume
                </button>
              </div>

              <div className="flex justify-center space-x-6">
                <a href="https://www.linkedin.com/in/raj-guptaaa/" className="text-2xl hover:text-blue-600 transition" target='_blank' rel='noreferrer'>
                  <FaLinkedin />
                </a>
                <a href="https://github.com/rajguptaaa/" className="text-2xl hover:text-gray-800 transition" target='_blank' rel='noreferrer'>
                  <FaGithub />
                </a>
                <a href="https://leetcode.com/u/raj_gupta_45/" className="text-2xl hover:text-orange-500 transition" target='_blank' rel='noreferrer'>
                  <SiLeetcode />
                </a>
                <a href="https://www.instagram.com/raj_jay_gupta/" className="text-2xl hover:text-pink-500 transition" target='_blank' rel='noreferrer'>
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="font-mono text-4xl font-bold mb-8 text-center md:text-left">
              &lt;/About Me&gt;
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
              I’m a final-year B.Tech Computer Science student with a strong passion for full-stack web development and building scalable, user-friendly applications.
              I have hands-on experience with the MERN stack (MongoDB, Express.js, React, Node.js), and enjoy working on both the frontend and backend of applications. I've built several projects ranging from AI Text to image generator, Spotify and Gemini Clones, to E-Commerce webpage, and I'm constantly learning through platforms like LeetCode and GitHub.
              I'm also comfortable working with REST APIs, version control (Git), and have a good grasp of data structures and algorithms.
              Currently, I'm seeking internship or full-time opportunities where I can contribute to meaningful projects, grow as a developer, and learn from experienced teams.
              Let’s connect — I’m always open to opportunities, collaborations, and conversations!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;