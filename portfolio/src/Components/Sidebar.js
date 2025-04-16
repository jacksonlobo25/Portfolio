import React from "react";
import { motion } from "framer-motion";

const commands = [
  {
    title: "👤 About Me",
    cmds: ["whoami", "who", "logname", "hostname"]
  },
  {
    title: "🧠 Skills",
    cmds: ["top", "iostat", "glances", "vmstat"]
  },
  {
    title: "💼 Experience",
    cmds: ["history", "uptime", "last", "journalctl"]
  },
  {
    title: "🚀 Projects",
    cmds: ["ls", "tree", "find", "stat"]
  },
  {
    title: "📞 Contact",
    cmds: ["ping me", "telnet", "mail", "talk"]
  }
];

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: isOpen ? 0 : -300 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="fixed top-0 left-0 h-full w-64 z-50 bg-black border-r border-green-700 text-green-400 font-mono p-4 shadow-lg overflow-y-auto pb-12"
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

      {commands.map((section, sectionIndex) => (
        <div key={section.title} className="mb-4">
          <h3 className="text-green-300 mb-2">{section.title}</h3>
          <ul className="space-y-1 pl-2">
            {section.cmds.map((cmd, cmdIndex) => (
              <motion.li
                key={cmd}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -10 }}
                transition={{ delay: (sectionIndex + cmdIndex) * 0.03 }}
                className="hover:text-green-300"
              >
                <span className="text-green-400">{cmd}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      ))}

      <p className="text-xs text-red-400 border-t border-green-800 pt-4 mt-4 italic">
        ⚠️ Try typing <span className="text-green-400 font-semibold">shutdown</span>... if you dare.
      </p>

    </motion.div>
  );
};

export default Sidebar;
