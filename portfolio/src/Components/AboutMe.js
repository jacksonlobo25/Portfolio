import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Button from './ui/Button';

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
      <div className="text-xl mb-4">
        <span className="text-purple-400">$ whoami</span>
        <br />
        <Typewriter
          words={[
            'Hi, I\'m Jackson 👋',
            'A DevOps Engineer passionate about automation, CI/CD, and cloud-native tools.',
            'I build and deploy modern applications using Docker, Kubernetes, GitHub Actions, and more.'
          ]}
          loop={1}
          cursor
          typeSpeed={50}
          deleteSpeed={20}
          delaySpeed={1000}
        />
      </div>

      <div className="mt-6">
        <Button onClick={handleGenerateClick}>Generate Display</Button>
      </div>

      {generating && (
        <motion.div
          className="mt-4 text-yellow-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="animate-pulse">Generating resume...</span>
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
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 inline-block"
          >
            Download Resume
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default AboutMe;
