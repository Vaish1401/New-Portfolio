import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js', level: 90, icon: '⚛️' },
        { name: 'JavaScript', level: 88, icon: '📜' },
        { name: 'HTML/CSS', level: 90, icon: '🎨' },
        { name: 'Tailwind CSS', level: 85, icon: '🎯' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'REST APIs', level: 82, icon: '🔗' },
        { name: 'Express.js', level: 78, icon: '⚡' },
        { name: 'MySQL', level: 80, icon: '🗄️' },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 88, icon: '🔀' },
        { name: 'Agile/Scrum', level: 85, icon: '📋' },
        { name: 'RESTful Design', level: 82, icon: '📐' },
        { name: 'SDLC', level: 85, icon: '🔄' },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-bold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-8 card"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Key Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Component Development',
              'State Management',
              'Responsive Design',
              'API Integration',
              'Database Design',
              'Performance Optimization',
              'Code Quality & Testing',
              'Problem Solving',
            ].map((competency, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
              >
                <span className="text-blue-600 dark:text-blue-400">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{competency}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
