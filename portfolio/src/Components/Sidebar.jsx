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

const Sidebar = () => {
  return (
    <aside className="hidden md:block w-64 p-4 text-left text-green-400 font-mono border-r border-green-700 bg-black/70 h-screen overflow-y-auto">
      <h2 className="text-lg mb-4 font-semibold">📜 Available Commands</h2>
      <ul className="space-y-3">
        {commands.map((item, index) => (
          <motion.li
            key={item.cmd}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            className="hover:text-green-300"
          >
            <span className="text-green-300">{item.cmd}</span>
            <span className="text-gray-400"> — {item.desc}</span>
          </motion.li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
