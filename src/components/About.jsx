import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle } from 'lucide-react'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  const highlights = [
    'Full Stack Developer with 1+ year of experience',
    'Specialized in React.js and modern web technologies',
    'Strong problem-solving skills and attention to UI/UX details',
    'Experience with RESTful APIs and database design',
    'Passionate about performance optimization and scalable systems',
    'Quick learner with strong foundation in SDLC and Agile methodologies',
  ]

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            >
              I'm a passionate Full Stack Developer who loves creating intuitive, responsive web applications. I've developed a strong foundation in modern frontend and backend technologies.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            >
              I thrive in collaborative environments, break complex problems into manageable solutions, and continuously improve my skills. My journey from internships to professional roles at top companies has shaped my approach to building scalable, user-centric applications.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="space-y-3"
            >
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700 dark:text-gray-300">{highlight}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants} className="card p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">1+</h3>
              <p className="text-gray-600 dark:text-gray-400">Years of Experience</p>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">4</h3>
              <p className="text-gray-600 dark:text-gray-400">Companies</p>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</h3>
              <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-6 text-center">
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</h3>
              <p className="text-gray-600 dark:text-gray-400">Dedication</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
