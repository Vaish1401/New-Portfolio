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
      className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-10 bg-white/55 dark:bg-gray-950/35 backdrop-blur-[2px]"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <p className="section-eyebrow">Introduction</p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="section-divider origin-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-ink/85 dark:text-stone-300 mb-6 leading-relaxed"
            >
              I'm a passionate Full Stack Developer who loves creating intuitive, responsive web applications. I've developed a strong foundation in modern frontend and backend technologies.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-ink/85 dark:text-stone-300 mb-8 leading-relaxed"
            >
              I thrive in collaborative environments, break complex problems into manageable solutions, and continuously improve my skills. My journey from internships to professional roles at top companies has shaped my approach to building scalable, user-centric applications.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-3.5">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-rose-500 dark:text-rose-400 flex-shrink-0 mt-0.5" size={20} strokeWidth={1.75} />
                  <p className="text-ink/80 dark:text-stone-400 leading-snug">{highlight}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-5"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {[
              { n: '1+', l: 'Years of Experience' },
              { n: '4', l: 'Companies' },
              { n: '5+', l: 'Projects Completed' },
              { n: '100%', l: 'Dedication' },
            ].map((stat) => (
              <motion.div
                key={stat.l}
                variants={itemVariants}
                className="card p-7 text-center group"
              >
                <h3 className="font-display text-4xl font-semibold bg-gradient-to-br from-rose-600 to-pink-500 bg-clip-text text-transparent dark:from-rose-300 dark:to-pink-300 mb-2">
                  {stat.n}
                </h3>
                <p className="text-sm text-ink-muted dark:text-stone-500">{stat.l}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
