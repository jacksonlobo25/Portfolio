import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const steps = [
  "kubectl apply -f projects.yaml",
  "deployment.apps/portfolio created",
  "service/portfolio-svc created",
  "Waiting for pods to become ready...",
  "Fetching project containers...",
  "🚀 Projects deployed successfully!"
];

const projects = [
  {
    title: "CI/CD Pipeline",
    image: "/images/cicd.png",
    github: "https://github.com/yourname/cicd-pipeline"
  },
  {
    title: "Kubernetes Monitoring",
    image: "/images/monitoring.png",
    github: "https://github.com/yourname/k8s-monitoring"
  },
  {
    title: "Spring Boot + React App",
    image: "/images/fullstack.png",
    github: "https://github.com/yourname/spring-react-app"
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
      }, 1200);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowProjects(true), 1000);
    }
  }, [currentStep]);

  return (
    <div className="max-w-5xl mx-auto px-4 pt-4 text-white">
      {/* Terminal Box */}
      <div className="bg-[#1e1e1e] border border-green-500 rounded-md p-6 font-mono text-green-300 shadow-lg text-sm">
        {visibleSteps.map((step, idx) => (
          <div key={idx} className="mb-1">
            <Typewriter
              words={[step]}
              cursor
              cursorStyle="_"
              typeSpeed={30}
              deleteSpeed={0}
              delaySpeed={500}
            />
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
