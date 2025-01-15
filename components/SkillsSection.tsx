"use client"
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

interface Skill {
  name: string;
  level: number;
  years?: number;  // optional because softSkills don't have years
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="space-y-4">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-700">{skill.name}</span>
            <span className="text-sm font-medium text-gray-500">
              {skill.years ? `${skill.years} years` : ''}
            </span>
          </div>
          <motion.div
            className="w-full bg-gray-200 rounded-full h-2.5"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="bg-blue-600 h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory title="Programming Languages" skills={skills.programmingLanguages} />
          <SkillCategory title="Frameworks & Libraries" skills={skills.frameworksAndLibraries} />
          <SkillCategory title="Databases" skills={skills.databases} />
          <SkillCategory title="Tools & Technologies" skills={skills.toolsAndTechnologies} />
          <SkillCategory title="Soft Skills" skills={skills.softSkills} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

