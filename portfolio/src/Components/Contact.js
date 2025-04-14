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
    <div className="max-w-4xl mx-auto mt-16 px-4 text-sm text-green-300 font-mono">
      {/* Terminal-style block */}
      <div className="bg-[#0d1117] border border-green-500 rounded-md px-6 py-6 shadow-lg text-left">
        <p className="text-purple-400 mb-4">/home/jackson:$ <span className="text-green-300">connect --devops</span></p>

        <motion.h2
          className="text-2xl font-bold mb-4 text-green-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch!
        </motion.h2>

        <motion.p
          className="text-base mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Whether you have an idea for a project, a question about DevOps, or just want to chat, feel free to shoot me an email!
        </motion.p>

        {/* Step-by-step terminal animation */}
        <div className="bg-black rounded-lg p-4 mt-4 border border-green-400 shadow-inner leading-relaxed">
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

        {/* Social Icons */}
        {showIcons && (
          <motion.div
            className="flex gap-8 mt-6 text-2xl"
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
              className="text-white hover:text-green-400"
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
              className="text-blue-400 hover:text-green-400"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="mailto:jackson@example.com"
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              className="text-red-400 hover:text-green-400"
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Contact;
