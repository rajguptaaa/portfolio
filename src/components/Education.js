import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Lovely Professional Unniversity",
      location: "Jalandhar, Punjab",
      year: "2022 - 2026",
      grade: "CGPA: 7.11"
    },
    {
      degree: "Senior Secondary School Certificate",
      institution: "Kendriya Vidyalaya Sangathan",
      location: "Gangtok, Sikkim",
      year: "2021 - 2022",
      grade: "Percentage: 72.4%"
    },
    {
      degree: "Matriculation;",
      institution: "Kendriya Vidyalaya Sangathan",
      location: "Gangtok, Sikkim",
      year: "2019 - 2020",
      grade: "Percentage: 76.2%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="w-full mx-auto px-8">
        <h2 className="font-mono text-4xl font-bold text-center mb-16">
          &lt;/Education&gt;
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 mb-6 border-l-4 border-black">
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-gray-600 mb-1">{edu.institution}</p>
              <p className='text-gray-500 md-1'>{edu.location}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">{edu.year}</span>
                <span className="font-medium">{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;