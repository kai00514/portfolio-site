"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-900 text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={personalInfo.programmingImage || "/placeholder.svg"}
            alt="Programming"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={personalInfo.profileImage || "/placeholder.svg"}
            alt={personalInfo.name}
            width={200}
            height={200}
            className="rounded-full mx-auto md:mx-0 mb-4 border-4 border-blue-500"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{personalInfo.name}</h1>
          <h2 className="text-2xl md:text-3xl text-blue-400 mb-4">{personalInfo.title}</h2>
          <p className="text-xl mb-8">{personalInfo.catchphrase}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;

