import React, { useState, useEffect, useRef } from "react";
import Lottie from 'lottie-react';
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar.js";
import Experience from './Experience.js';
import "./DevOpsPortfolio.css";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import AboutMe from "./AboutMe.js";
import Contact from "./Contact.js";
import infinityLoopAnimation from '../assets/CodingAnimation.json';

const commandMap = {
  "git clone": <Experience />,
  "docker build": <Skills/>,
  "kubectl apply": <Projects/>,
  "terraform apply": <AboutMe/>,
  "monitoring enable": <Contact/>
};

export default function DevOpsPortfolio() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [displayedOutput, setDisplayedOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const [inactive, setInactive] = useState(false);
  const inactivityTimer = useRef(null);
  
  useEffect(() => {
    const resetTimer = () => {
      clearTimeout(inactivityTimer.current);
      inactivityTimer.current = setTimeout(() => {
        setInactive(true);
      }, 300000); // 60,000 ms = 1 minute
    };
  
    const events = ["mousemove", "keydown", "mousedown", "touchstart"];
    events.forEach((event) => window.addEventListener(event, resetTimer));
    resetTimer(); // start timer on load
  
    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      clearTimeout(inactivityTimer.current);
    };
  }, []);
  

  useEffect(() => {
    let timeout;
  
    if (output && loading) {
      // Only animate if it's a string
      if (typeof output === "string") {
        timeout = setTimeout(() => {
          let i = 0;
          const interval = setInterval(() => {
            setDisplayedOutput((prev) => prev + output[i]);
            i++;
            if (i >= output.length) clearInterval(interval);
          }, 20);
          setLoading(false);
        }, 1000);
      } else {
        // For JSX components (like <Experience />), just render it after delay
        timeout = setTimeout(() => {
          setDisplayedOutput(output);
          setLoading(false);
        }, 1000);
      }
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

      {!sidebarOpen && !inactive && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed top-4 left-4 z-40 bg-green-500 text-black px-3 py-1 rounded shadow hover:bg-green-400 transition"
          >
            ☰
          </button>
        )}


        <div className="relative z-10 bg-black/80 min-h-screen flex flex-col lg:flex-row">
        {sidebarOpen && (
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        )}


        <div className="flex-1 flex flex-col items-center text-center px-4 py-16">
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
            {typeof displayedOutput === "string" && displayedOutput.startsWith("⚠️") ? (
              // Show Card with border ONLY for invalid command
              <Card className="bg-gray-800 border border-green-500">
                <CardContent className="p-6 text-lg text-left font-mono text-green-300 whitespace-pre-wrap">
                  {displayedOutput}
                </CardContent>
              </Card>
            ) : (
              // For valid JSX components, just display as-is
              <>{loading ? <span className="typing-loader" /> : displayedOutput}</>
            )}
          </motion.div>
        )}

        {inactive && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="fixed inset-0 bg-white z-[9999] flex items-center justify-center text-black text-2xl font-mono"
        >
            Session expired. Please reload the page.
        </motion.div>
        )}

        {!input && !displayedOutput && (
          <div className="w-full max-w-sm mx-auto mt-10 flex justify-center items-center">
            <Lottie
              animationData={infinityLoopAnimation}
              loop={true}
              style={{ width: '300px', height: '300px' }}
            />
          </div>
        )}

      </div>
    </div>
    </div>
  );
}