import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ui/ProjectCard";
import TypedLine from "./ui/TypedLine";

const steps = [
  "deployment.apps/portfolio created",
  "service/portfolio-svc created",
  "Waiting for pods to become ready...",
  "Fetching project containers...",
  "🚀 Projects deployed successfully!"
];

const projects = [
  {
    title: "DevOpsPOC",
    image: `${process.env.PUBLIC_URL}/images/DevOpsPOC.png`,
    github: "https://github.com/jacksonlobo25/DevOps-POC"
  },
  {
    title: "NetmedsHub",
    image: `${process.env.PUBLIC_URL}/images/NetmedsHub.png`,
    github: "https://github.com/jacksonlobo25/Netmeds"
  },
  {
    title: "CleanChain",
    image: `${process.env.PUBLIC_URL}/images/CleanChain.png`,
    github: "https://github.com/jacksonlobo25/Roger-404-Airbus"
  },
  {
    title: "PrintGender",
    image: `${process.env.PUBLIC_URL}/images/PrintGender.png`,
    github: "https://github.com/jacksonlobo25/Gender_Determination_based_on_Fingerprint"
  },
  {
    title: "NurseryHub",
    image: `${process.env.PUBLIC_URL}/images/NurseryHub.png`,
    github: "https://github.com/jacksonlobo25/Nursery-Management-System"
  },
  {
    title: "SteganoPix",
    image: `${process.env.PUBLIC_URL}/images/SteganoPix.png`,
    github: "https://github.com/jacksonlobo25/Image-Steganography-"
  },
  {
    title: "GasNow",
    image: `${process.env.PUBLIC_URL}/images/GasNow.png`,
    github: "https://github.com/jacksonlobo25/Gas-Booking-System"
  }
];

const Projects = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    if (currentStep < steps.length) {
      const timeout = setTimeout(() => {
        setVisibleSteps((prev) => [...prev, steps[currentStep]]);
        setCurrentStep((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowProjects(true), 1000);
    }
  }, [currentStep]);

  return (
    <div className="max-w-5xl mx-auto px-4 pt-4 text-white">
      {/* Terminal Box */}
      <div className="max-w-xl mx-auto bg-[#1a1a1a] border border-green-500 rounded-md p-4 font-mono text-green-300 text-sm shadow-lg text-left">
        <p className="text-purple-400">
          /home/jackson:$ <span className="text-green-300">kubectl apply -f projects.yaml</span>
        </p>
        {visibleSteps.map((step, idx) => (
          <div key={idx} className="mb-1">
            <TypedLine text={step} />
          </div>
        ))}
      </div>

      {/* Projects shown after "deployment complete" */}
      {showProjects && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
