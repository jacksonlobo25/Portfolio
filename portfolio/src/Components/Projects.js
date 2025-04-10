import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ui/ProjectCard";

const deploymentSteps = [
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
  const [currentStep, setCurrentStep] = useState(0);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    if (currentStep < deploymentSteps.length) {
      const timeout = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 900);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowProjects(true), 1000);
    }
  }, [currentStep]);

  return (
    <div className="p-6 max-w-5xl mx-auto text-green-300 font-mono">
      <div className="bg-[#0d1117] border border-green-500 rounded-md p-4 mb-6 shadow-lg">
        {deploymentSteps.slice(0, currentStep).map((step, idx) => (
          <div key={idx} className="mb-1">
            {step}
          </div>
        ))}
      </div>

      {showProjects && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
