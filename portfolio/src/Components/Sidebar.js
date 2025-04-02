import React from "react";
import { motion } from "framer-motion";

const commands = [
  { cmd: "git clone", desc: "Show Experience" },
  { cmd: "docker build", desc: "Show Skills" },
  { cmd: "kubectl apply", desc: "Show Projects" },
  { cmd: "terraform apply", desc: "Show Infrastructure" },
  { cmd: "monitoring enable", desc: "Show Monitoring Tools" },
  { cmd: "log view", desc: "Show Deployment Logs" },
  { cmd: "rollback", desc: "Show Rollback Story" },
];

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: isOpen ? 0 : -300 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="fixed top-0 left-0 h-full w-64 z-50 bg-black border-r border-green-700 text-green-400 font-mono p-4 shadow-lg"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">📜 Commands</h2>
        <button
          className="text-red-400 hover:text-red-300 text-lg"
          onClick={onClose}
        >
          ✖
        </button>
      </div>
      <ul className="space-y-3">
        {commands.map((item, index) => (
          <motion.li
            key={item.cmd}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -10 }}
            transition={{ delay: index * 0.05 }}
            className="hover:text-green-300"
          >
            <span className="text-green-300">{item.cmd}</span>
            <span className="text-gray-400"> — {item.desc}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Sidebar;
