"use client"
import { motion } from 'framer-motion';
import { experience, education } from '@/lib/data';

interface WorkExperience {
  company: string;
  period: string;
  role: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  courses: string[];
  achievements: string[];
}

interface ExperienceItemProps {
  item: WorkExperience | Education;
  type: 'work' | 'education';
}

const ExperienceItem = ({ item, type }: ExperienceItemProps) => (
  <motion.div
    className="mb-8"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="bg-white p-6 rounded-lg shadow-md">
      {type === 'work' ? (
        <>
          <h4 className="text-xl font-semibold">{(item as WorkExperience).company}</h4>
          <p className="text-gray-600">{(item as WorkExperience).role}</p>
        </>
      ) : (
        <>
          <h4 className="text-xl font-semibold">{(item as Education).degree}</h4>
          <p className="text-gray-600">{(item as Education).institution}</p>
        </>
      )}
      <p className="text-gray-500 mt-2">{item.period}</p>
      
      {/* 実績リスト */}
      <ul className="mt-4 list-disc list-inside">
        {item.achievements.map((achievement, index) => (
          <li key={index} className="text-gray-700">{achievement}</li>
        ))}
      </ul>
    </div>
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

