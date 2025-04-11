import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const iconVariants = {
  hover: { scale: 1.2, rotate: 5 },
  initial: { scale: 1, rotate: 0 },
};

const Contact = () => {
  return (
    <div className="bg-[#0f172a] text-green-400 font-mono p-8 rounded-xl shadow-lg max-w-3xl mx-auto mt-16 text-center border border-green-500">
      <motion.h2
        className="text-3xl font-bold mb-4 text-purple-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch!
      </motion.h2>

      <motion.p
        className="text-base md:text-lg mb-6 text-green-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Whether you have an idea for a project, a question about DevOps, or just want to chat, feel free to shoot me an email!
      </motion.p>

      <div className="flex justify-center gap-8 text-3xl">
        <motion.a
          href="https://github.com/jacksonlobo25"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          className="text-white hover:text-green-400 transition-colors"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/jacksonlobo25"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          className="text-blue-400 hover:text-green-400 transition-colors"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="mailto:jackson@example.com"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          className="text-red-400 hover:text-green-400 transition-colors"
        >
          <FaEnvelope />
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
