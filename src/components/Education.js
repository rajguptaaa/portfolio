import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaTrophy } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Jalandhar, Punjab",
      year: "2022 - 2026",
      grade: "CGPA: 7.11",
      icon: <FaGraduationCap className="text-blue-600" />
    },
    {
      degree: "Senior Secondary School Certificate",
      institution: "Kendriya Vidyalaya Sangathan",
      location: "Gangtok, Sikkim",
      year: "2021 - 2022",
      grade: "Percentage: 71.4%",
      icon: <FaGraduationCap className="text-green-600" />
    },
    {
      degree: "Matriculation",
      institution: "Kendriya Vidyalaya Sangathan",
      location: "Gangtok, Sikkim",
      year: "2019 - 2020",
      grade: "Percentage: 76.2%",
      icon: <FaGraduationCap className="text-purple-600" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full mx-auto px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            &lt;/Education&gt;
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>
            
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                className="relative mb-12 md:ml-16"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hidden md:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                ></motion.div>
                
                <motion.div 
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-gradient-to-b from-blue-500 to-purple-600"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-white dark:bg-gray-700 p-3 rounded-full shadow-md">
                      {edu.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{edu.degree}</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">{edu.institution}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-3">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <FaMapMarkerAlt className="mr-2 text-sm" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <FaCalendarAlt className="mr-2 text-sm" />
                          <span className="text-sm">{edu.year}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <FaTrophy className="text-yellow-500 mr-2" />
                        <span className="font-medium text-gray-900 dark:text-white bg-yellow-100 dark:bg-yellow-900 px-3 py-1 rounded-full text-sm">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;