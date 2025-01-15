"use client"
import { motion } from 'framer-motion';
import { experience, education } from '@/lib/data';

const ExperienceItem = ({ item, type }) => (
  <motion.div
    className="mb-8"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-xl font-semibold">{item.company || item.degree}</h3>
    <p className="text-gray-600 mb-2">{item.period}</p>
    {type === 'work' && (
      <>
        <p className="text-gray-700 mb-2">{item.role}</p>
        <ul className="list-disc list-inside mb-2">
          {item.responsibilities.map((resp, index) => (
            <li key={index} className="text-gray-600">{resp}</li>
          ))}
        </ul>
        <h4 className="font-semibold mb-1">Key Achievements:</h4>
        <ul className="list-disc list-inside mb-2">
          {item.achievements.map((achievement, index) => (
            <li key={index} className="text-gray-600">{achievement}</li>
          ))}
        </ul>
        <p className="text-gray-700">
          <span className="font-semibold">Technologies used:</span> {item.technologies.join(', ')}
        </p>
      </>
    )}
    {type === 'education' && (
      <>
        <p className="text-gray-700 mb-2">{item.institution}</p>
        <p className="text-gray-600 mb-2">Relevant Coursework: {item.courses.join(', ')}</p>
        <ul className="list-disc list-inside">
          {item.achievements.map((achievement, index) => (
            <li key={index} className="text-gray-600">{achievement}</li>
          ))}
        </ul>
      </>
    )}
  </motion.div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Experience & Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
            {experience.map((exp, index) => (
              <ExperienceItem key={index} item={exp} type="work" />
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            {education.map((edu, index) => (
              <ExperienceItem key={index} item={edu} type="education" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

