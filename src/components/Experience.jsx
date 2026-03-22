import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Calendar, MapPin } from 'lucide-react'

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const experiences = [
    {
      title: 'Software Developer',
      company: 'SAMWAD.tech',
      location: 'Noida, India',
      duration: 'Jan 2026 – Present',
      highlights: [
        'Built and maintained full-stack apps using React, JavaScript, and Laravel',
        'Managed WooCommerce catalogs with bulk CSV imports',
        'Integrated Razorpay for secure online payments',
        'Customized WordPress plugins and themes as per business needs',
        'Fixed frontend & backend issues to ensure smooth performance',
      ],
    },
    {
      title: 'Project Engineer',
      company: 'Wipro',
      location: 'Noida, India',
      duration: 'Jan 2025 – Dec 2025',
      highlights: [
        'Developed and maintained React components for enterprise applications',
        'Integrated RESTful APIs and optimized database queries for performance',
        'Collaborated with cross-functional teams in Agile environment',
        'Implemented responsive UI using Tailwind CSS and modern React patterns',
      ],
    },
    {
      title: 'Associate Software Developer',
      company: 'NEP Group Inc.',
      location: 'Gurugram, India',
      duration: 'Oct 2024 – Jan 2025',
      highlights: [
        'Built full-stack features using React and Node.js',
        'Designed and normalized MySQL database schemas',
        'Conducted code reviews and participated in SDLC planning',
        'Fixed production bugs and improved application stability',
      ],
    },
    {
      title: 'Frontend Developer Intern',
      company: 'AUM Dacro Coatings',
      location: 'Gurugram, India',
      duration: 'Jun 2024 – Oct 2024',
      highlights: [
        'Created responsive web pages using HTML, CSS, and JavaScript',
        'Used Git for version control and collaborated via GitHub',
        'Learned React fundamentals and implemented interactive components',
        'Applied CSS best practices for cross-browser compatibility',
      ],
    },
  ]

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="experience"
      className="py-28 md:py-36 px-4 sm:px-6 lg:px-10 bg-white/45 dark:bg-gray-950/25"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <p className="section-eyebrow">Career</p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="section-divider origin-center"
        />

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="hidden md:block absolute left-8 top-3 bottom-3 w-px bg-gradient-to-b from-rose-300 via-pink-300 to-rose-200 dark:from-rose-800 dark:via-rose-700 dark:to-rose-900 rounded-full" />

          <div className="space-y-8 md:pl-24">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6 md:p-8 relative"
              >
                <div className="hidden md:flex absolute -left-[1.85rem] top-9 w-4 h-4 rounded-full bg-white dark:bg-gray-950 border-[3px] border-rose-400 dark:border-rose-500 shadow-sm z-[1]" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink dark:text-white">
                      {experience.title}
                    </h3>
                    <p className="text-lg text-rose-600 dark:text-rose-300 font-medium mt-1">
                      {experience.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 md:text-right">
                    <div className="flex items-center gap-2 md:justify-end text-ink-muted dark:text-stone-400 text-sm">
                      <Calendar size={17} strokeWidth={1.75} />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 md:justify-end text-ink-muted dark:text-stone-400 text-sm">
                      <MapPin size={17} strokeWidth={1.75} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 mt-5 pt-5 border-t border-rose-100/70 dark:border-rose-900/40">
                  {experience.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="flex gap-3 text-ink/85 dark:text-stone-300 text-[0.95rem] leading-relaxed"
                    >
                      <span className="text-rose-500 dark:text-rose-400 font-medium flex-shrink-0 mt-0.5">
                        ·
                      </span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#contact" className="btn-primary">
            Interested? Let's Chat!
          </a>
        </motion.div>
      </div>
    </section>
  )
}
