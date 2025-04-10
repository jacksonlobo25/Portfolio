import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, image, github, index }) => {
  return (
    <motion.div
      className="bg-[#0f172a] border border-green-500 rounded-md overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.3 }}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 text-white">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition"
        >
          <FaGithub />
          View on GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
