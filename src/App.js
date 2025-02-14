import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
        <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          Hi, I'm [Your Name] 🚀
        </motion.h1>
        <motion.p
            className="text-lg text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
          I'm a passionate [Your Role] who loves building awesome projects.
        </motion.p>
        <a
            href="https://github.com/yourgithub"
            className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
            target="_blank" rel="noopener noreferrer"
        >
          Check out my GitHub
        </a>
      </div>
  );
}
