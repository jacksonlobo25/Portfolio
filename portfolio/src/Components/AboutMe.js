import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCloud } from 'react-icons/fa';

const AboutMe = () => {
  const [typedText, setTypedText] = useState('');
  const [generating, setGenerating] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const aboutLines = [
    "Hi, I'm Jackson 👋",
    'A DevOps Engineer passionate about automation, CI/CD, and cloud-native tools.',
    'I build and deploy modern applications using Docker, Kubernetes, GitHub Actions, and more.'
  ];

  const fullText = aboutLines.join('\n');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const handleGenerateClick = () => {
    setGenerating(true);
    setShowResume(false);
    setTimeout(() => {
      setGenerating(false);
      setShowResume(true);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 font-mono text-sm text-green-300">

      {/* Profile Image Centered */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-8"
      >
        <div className="rounded-full border-4 border-green-500 w-28 h-28 overflow-hidden shadow-lg">
          <img
            src={`${process.env.PUBLIC_URL}/images/Picture1.jpg`}
            alt="Jackson Lobo"
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>

      {/* Terminal Box */}
      <div className="bg-[#0d1117] border border-green-500 rounded-md px-4 py-5 shadow-lg whitespace-pre-wrap text-left">
        <div className="text-purple-400 mb-2">/home/jackson:$ <span className="text-green-300">whoami</span></div>

        <p>{typedText}</p>

        <div className="mt-6">
          <button
            onClick={handleGenerateClick}
            className="bg-[#1e1e1e] text-green-400 border border-green-600 px-6 py-2 rounded-lg text-sm hover:bg-green-900 hover:text-white transition-all duration-200 shadow-md active:scale-95"
          >
            ⚙️ Generate Resume
          </button>
        </div>

        {generating && (
          <motion.div
            className="mt-6 flex justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="text-blue-400 text-3xl"
            >
              <FaCloud />
            </motion.div>
          </motion.div>
        )}

        {showResume && (
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <a
              href="/resume.pdf"
              download
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block"
            >
              📄 Download Resume
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
