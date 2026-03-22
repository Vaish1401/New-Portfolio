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
      className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-blush-100/35 via-white/45 to-blush-50/25 dark:from-gray-950 dark:via-ink dark:to-gray-950"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-eyebrow">Capabilities</p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="section-divider origin-center"
        />

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
              <h3 className="font-display text-2xl font-semibold text-rose-700 dark:text-rose-300 mb-7 pb-3 border-b border-rose-100/80 dark:border-rose-900/40">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-semibold text-ink/90 dark:text-stone-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-rose-600 dark:text-rose-300 tabular-nums">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-rose-100/80 dark:bg-rose-950/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-rose-500 via-pink-400 to-rose-400"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 card p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-display text-2xl font-semibold mb-8 text-ink dark:text-white">
            Key Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-rose-50/90 to-pink-50/50 dark:from-rose-950/35 dark:to-pink-950/20 border border-rose-100/60 dark:border-rose-900/30"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
              >
                <span className="text-rose-500 dark:text-rose-400 font-medium">✓</span>
                <span className="text-ink/80 dark:text-stone-300">{competency}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
