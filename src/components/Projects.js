import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaRocket } from 'react-icons/fa';
import spotify from '../assets/spotify.png';
import imagify from '../assets/imagify.png';
import cipher from '../assets/cipher.png';

const Projects = () => {
  const projects = [
    {
      image: imagify,
      title: "AI text to Image Generator",
      description: "Built a full-stack SaaS platform that converts text prompts into AI-generated images using the ClipDrop API. Executed user authentication with JWT, session management, and credit-based usage tracking for secure access. Integrated Razorpay Payment Gateway to enable purchasing additional credits.",
      tech: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "Razorpay"],
      github: "https://github.com/rajguptaaa/imagify",
      demo: "https://imagify-frontend-qwqr.onrender.com",
      featured: true
    },
    {
      image: spotify,
      title: "Spotify Clone (Frontend)",
      description: "Created a pixel-perfect responsive UI clone of Spotify with dynamic playlist rendering and custom audio player controls. Enforced React Router for navigation and component-driven architecture for better maintainability.",
      tech: ["React", "Express", "CSS3", "React Router"],
      github: "https://github.com/rajguptaaa/spotify_frontend",
      demo: "https://spotifycloneraj.netlify.app/",
      featured: false
    },
    {
      image: cipher,
      title: "CipherStudio",
      description: "Built an online React IDE with MERN Stack + AZURE file storage. Features include real-time code editing, file management, and cloud storage integration for seamless development experience.",
      tech: ["MERN", "Azure", "MongoDB", "API Integration", "CSS3"],
      github: "https://github.com/rajguptaaa/cipherStudio",
      demo: "https://cipher-studio-seven.vercel.app/",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            &lt;/Projects&gt;
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${project.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {project.featured && (
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 text-center">
                  FEATURED PROJECT
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <FaCode className="text-blue-500 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm font-medium"
                  >
                    <FaGithub className="text-lg" /> 
                    Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                  >
                    <FaRocket className="text-lg" /> 
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;