import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import spotify from '../assets/spotify.png';
import imagify from '../assets/imagify.png';
import cipher from '../assets/cipher.png';

const Projects = () => {
  const projects = [
    {
      image: imagify,
      title: "AI text to Image Generator",
      description: "Built a full-stack SaaS platform that converts text prompts into AI-generated images using the ClipDrop API. • Executed user authentication with JWT, session management, and credit-based usage tracking for secure access.• Integrated Razorpay Payment Gateway to enable purchasing additional credits. • Integrated RESTful APIs with MongoDB database for efficient data handling. • Cloud-based SaaS application deployment, Deployed on Netlify, ensuring seamless access and uptime.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/rajguptaaa/imagify",
      demo: "https://imagify-frontend-qwqr.onrender.com"
    },
    {
      image: spotify,
      title: "Spotify Clone (Frontend)",
      description: "Created a pixel-perfect responsive UI clone of Spotify with dynamic playlist rendering and custom audio player controls.Enforced React Router for navigation and component-driven architecture for better maintainability. Optimized loading performance using lazy loading for large assets.",
      tech: ["React", "Express"],
      github: "https://github.com/rajguptaaa/spotify_frontend",
      demo: "https://spotifycloneraj.netlify.app/"
    },
    {
      image: cipher,
      title: "CipherStudio",
      description: "Built a online React IDE with MERN Stack + AZURE file storage",
      tech: ["MERN", "API Integration", "CSS3", "AZURE", "MongoDB"],
      github: "https://github.com/rajguptaaa/cipherStudio",
      demo: "https://cipher-studio-seven.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-mono text-4xl font-bold text-center mb-16">
          &lt;/Projects&gt;
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a href={project.github} className="text-blue-600 hover:underline flex items-center gap-1">
                  <FaGithub /> GitHub
                </a>
                <a href={project.demo} className="text-blue-600 hover:underline flex items-center gap-1">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;