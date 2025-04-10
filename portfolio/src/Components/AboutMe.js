import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCloud } from 'react-icons/fa'; // cloud icon

const AboutMe = () => {
  const [generating, setGenerating] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const handleGenerateClick = () => {
    setGenerating(true);
    setShowResume(false);
    setTimeout(() => {
      setGenerating(false);
      setShowResume(true);
    }, 3000); // simulate loading
  };

  return (
    <div className="bg-black text-green-400 font-mono p-6 rounded-xl shadow-lg max-w-3xl mx-auto mt-10">
      <div className="text-xl mb-6 space-y-3">
        <div><span className="text-purple-400">$ whoami</span></div>
        <p>Hi, I'm Jackson 👋</p>
        <p>A DevOps Engineer passionate about automation, CI/CD, and cloud-native tools.</p>
        <p>I build and deploy modern applications using Docker, Kubernetes, GitHub Actions, and more.</p>
      </div>

      <div className="mt-6">
        {/* DevOps themed button */}
        <button
          onClick={handleGenerateClick}
          className="bg-[#1e1e1e] text-green-400 border border-green-600 px-6 py-2 rounded-lg font-mono text-sm hover:bg-green-900 hover:text-white transition-all duration-200 shadow-md active:scale-95"
        >
          ⚙️ Generate Display
        </button>
      </div>

      {/* Animated cloud loading */}
      {generating && (
        <motion.div
          className="mt-6 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            className="text-blue-400 text-4xl"
          >
            <FaCloud />
          </motion.div>
        </motion.div>
      )}

      {/* Resume download */}
      {showResume && (
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a
            href="/resume.pdf"
            download
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 inline-block"
          >
            📄 Download Resume
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default AboutMe;
