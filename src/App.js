import React from "react";
import { motion } from "framer-motion";
import { Button, Typography } from '@mui/material';

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-gray-900 text-white font-sans">
            {/* Header Section */}
            <header className="bg-gray-800 p-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <motion.h1
                        className="text-4xl font-bold text-blue-500"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Israa Alasmar
                    </motion.h1>
                    <motion.nav
                        className="space-x-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <a href="#about" className="hover:text-blue-400">About</a>
                        <a href="#projects" className="hover:text-blue-400">Projects</a>
                        <a href="#contact" className="hover:text-blue-400">Contact</a>
                    </motion.nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800">
                <div className="text-center">
                    <motion.h1
                        className="text-5xl font-extrabold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Hi, I'm Israa Alasmar 🚀
                    </motion.h1>
                    <motion.p
                        className="text-xl mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        I'm a passionate Software Developer who loves building innovative and scalable solutions.
                    </motion.p>
                    <Button
                        variant="contained"
                        color="primary"
                        href="https://github.com/yourgithub"
                        target="_blank" rel="noopener noreferrer"
                    >
                        Check out my GitHub
                    </Button>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-gray-800">
                <div className="max-w-7xl mx-auto text-center text-gray-300">
                    <motion.h2
                        className="text-3xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        className="text-lg leading-relaxed mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        I'm a full-stack developer with a passion for building intuitive and dynamic web applications. I enjoy problem-solving, optimizing performance, and keeping up with the latest tech trends. My goal is to create solutions that empower users and make a real impact.
                    </motion.p>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto text-center text-white">
                    <motion.h2
                        className="text-3xl font-bold text-blue-500 mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        My Projects
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold mb-4">Project 1</h3>
                            <p className="text-gray-400 mb-4">Description of the project and technologies used.</p>
                            <a href="/" className="text-blue-400 hover:underline">View Project</a>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold mb-4">Project 2</h3>
                            <p className="text-gray-400 mb-4">Description of the project and technologies used.</p>
                            <a href="/" className="text-blue-400 hover:underline">View Project</a>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold mb-4">Project 3</h3>
                            <p className="text-gray-400 mb-4">Description of the project and technologies used.</p>
                            <a href="/" className="text-blue-400 hover:underline">View Project</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer id="contact" className="bg-gray-800 py-10 text-center text-gray-300">
                <p className="text-lg">Feel free to get in touch with me!</p>
                <a
                    href="mailto:your-email@example.com"
                    className="mt-4 inline-block text-blue-400 hover:underline"
                >
                    Send me an email
                </a>
                <p className="mt-6">&copy; 2025 Israa Alasmar. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
