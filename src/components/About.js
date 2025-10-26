import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

const About = () => {
  const techSkills = [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  ];

  const softSkills = [
    "Communication",
    "Time Management",
    "Leadership",
    "Adaptability"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-mono text-4xl font-bold text-center mb-16">
          &lt;/Skills&gt;
        </h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {techSkills.map((skill, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition">
                <div className="text-3xl mb-2 flex justify-center">{skill.icon}</div>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Soft Skills</h3>
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-black text-white rounded-lg p-4 text-center">
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;