import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiMysql, SiCplusplus, SiPostman, SiVisualstudiocode, SiDocker, SiUbuntu } from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';

const About = () => {
  const programmingLanguages = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  ];

  const frameworks = [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  ];

  const databases = [
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "SQL", icon: <FaDatabase className="text-gray-600" /> },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
    { name: "Linux", icon: <SiUbuntu className="text-orange-500" /> },
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Leadership",
    "Adaptability"
  ];

  const SkillSection = ({ title, skills, bgColor = "bg-gray-50 dark:bg-gray-700" }) => (
    <motion.div 
      className="mb-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className={`${bgColor} rounded-lg p-4 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-600`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl mb-2 flex justify-center">{skill.icon}</div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            &lt;/Skills&gt;
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <SkillSection title="Programming Languages" skills={programmingLanguages} />
        <SkillSection title="Frameworks & Libraries" skills={frameworks} />
        <SkillSection title="Databases" skills={databases} />
        <SkillSection title="Tools & Technologies" skills={tools} />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-4 text-center hover:shadow-lg hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <BiCodeAlt className="text-2xl mx-auto mb-2" />
                <span className="font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;