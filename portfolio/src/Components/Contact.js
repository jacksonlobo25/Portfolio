import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const steps = [
  '> Connecting to LinkedIn...',
  '> Connecting to GitHub...',
  '> Launching email client...',
  '> Ready to chat 👋',
];

const iconVariants = {
  hover: { scale: 1.2, rotate: 5 },
  initial: { scale: 1, rotate: 0 },
};

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setShowIcons(true);
    }
  }, [currentStep]);

  return (
    <div className="bg-[#0f172a] text-green-400 font-mono p-8 rounded-xl shadow-lg max-w-3xl mx-auto mt-16 border border-green-500">
      <motion.h2
        className="text-3xl font-bold mb-4 text-purple-400 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch!
      </motion.h2>

      <motion.p
        className="text-base md:text-lg mb-6 text-green-300 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Whether you have an idea for a project, a question about DevOps, or just want to chat, feel free to shoot me an email!
      </motion.p>

      {/* Terminal-style step animation */}
      <div className="bg-black rounded-lg p-4 mt-6 text-left text-sm leading-relaxed border border-green-400 shadow-inner">
        {steps.slice(0, currentStep).map((line, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* Show icons after animation completes */}
      {showIcons && (
        <motion.div
          className="flex justify-center gap-8 text-3xl mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
