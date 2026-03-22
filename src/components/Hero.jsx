import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-lg">
            VS
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          Vaishnavi Singh
        </motion.h1>

        {/* Role */}
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6"
        >
          Software Engineer | Full Stack Developer
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Building scalable and user-friendly web applications with React, Node.js, and modern web technologies
        </motion.p>

        {/* Location */}
        <motion.p
          variants={itemVariants}
          className="text-base text-gray-500 dark:text-gray-400 mb-10"
        >
          📍 Noida, Uttar Pradesh, India
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="#projects"
            className="btn-primary"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn-secondary"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-16"
        >
          <a
            href="https://github.com/Vaish1401"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/vaishnavi-singh-567300200/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:vaishnavisingh1401@gmail.com"
            className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            <ArrowDown size={32} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
