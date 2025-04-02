import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import "./DevOpsPortfolio.css";

const commandMap = {
  "git clone": "Experience: 5+ years in DevOps, worked with AWS, Terraform, GitHub Actions, and Kubernetes.",
  "docker build": "Skills: Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, Prometheus, Grafana.",
  "kubectl apply": "Projects: Built scalable Kubernetes clusters, CI/CD pipelines, and monitoring systems.",
  "terraform apply": "Infrastructure: Designed cloud infrastructure with Terraform on AWS including EKS, VPC, and RDS.",
  "monitoring enable": "Monitoring: Implemented observability using Prometheus, Grafana, ELK stack, and Dynatrace.",
  "log view": "Deployment Logs: Successfully deployed and managed dozens of services across environments.",
  "rollback": "Rollback Story: Resolved a failed production deployment by quick rollback and post-mortem analysis.",
};

export default function DevOpsPortfolio() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [displayedOutput, setDisplayedOutput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timeout;
    if (output && loading) {
      timeout = setTimeout(() => {
        let i = 0;
        const interval = setInterval(() => {
          setDisplayedOutput((prev) => prev + output[i]);
          i++;
          if (i >= output.length) clearInterval(interval);
        }, 20);
        setLoading(false);
      }, 1000); // Simulate loading delay
    }
    return () => clearTimeout(timeout);
  }, [output, loading]);

  const handleCommand = (e) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    const matched = Object.keys(commandMap).find((cmd) => trimmed.startsWith(cmd));
    if (matched) {
      setDisplayedOutput("");
      setOutput(commandMap[matched]);
      setLoading(true);
    } else {
      setDisplayedOutput("\u26a0\ufe0f Command not recognized. Try: git clone, docker build, kubectl apply, etc.");
    }
    setInput("");
  };

  return (
    <div className="relative min-h-screen text-white bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/devops-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center text-center h-screen bg-black/80 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-md"
        >
          HI, I'M JACKSON LOBO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-2xl mb-8 text-gray-300 drop-shadow"
        >
          DevOps Engineer | Cloud & Automation Enthusiast
        </motion.p>

        <form onSubmit={handleCommand} className="w-full max-w-xl flex items-center gap-2">
          <span className="text-green-400 font-mono text-xl">$</span>
          <div className="relative w-full">
            <Input
              className="bg-black/80 border border-green-500 focus:ring-green-400 text-white placeholder:text-gray-500 font-mono pr-4"
              placeholder="Enter DevOps command e.g. kubectl apply"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 w-1 h-5 bg-green-400 animate-blink" />
          </div>
        </form>

        {(loading || displayedOutput) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 w-full max-w-3xl"
          >
            <Card className="bg-gray-800 border border-green-500">
              <CardContent className="p-6 text-lg text-left font-mono text-green-300 whitespace-pre-wrap">
                {loading ? <span className="typing-loader" /> : displayedOutput}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}