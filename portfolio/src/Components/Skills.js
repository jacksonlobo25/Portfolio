import React from "react";
import { motion } from "framer-motion";
import {
  FaDocker, FaGitAlt, FaGithub, FaJenkins, FaAws,
  FaPython,
} from "react-icons/fa";
import {
  SiTerraform, SiGnubash, SiSpringboot, SiKubernetes, SiSplunk
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  }),
};

const skillsData = [
  {
    title: "Tools",
    icons: [FaGitAlt, FaGithub, FaJenkins, FaDocker, SiTerraform, SiSplunk],
    labels: ["Git", "GitHub", "Jenkins", "Docker", "Terraform", "Splunk"]
  },
  {
    title: "Cloud",
    icons: [FaAws, VscAzure],
    labels: ["AWS", "Azure"]
  },
  {
    title: "Frameworks",
    icons: [SiKubernetes, SiSpringboot],
    labels: ["Kubernetes", "Spring Boot"]
  },
  {
    title: "Programming Languages",
    icons: [SiGnubash , FaPython],
    labels: ["BASH", "Python"]
  }
];

const Skills = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-10 text-left drop-shadow-lg">Skills</h2>
      <div className="flex flex-col gap-12">
        {skillsData.map((section, i) => (
          <motion.div
            key={section.title}
            className="flex flex-col md:flex-row gap-6 items-start"
            custom={i}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <div className="w-40 font-bold text-lg border-l-4 border-white pl-4">
              {section.title}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
              {section.icons.map((Icon, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <Icon className="text-4xl text-white mb-1 hover:text-green-400 transition" />
                  <span className="text-sm font-mono">{section.labels[idx]}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
