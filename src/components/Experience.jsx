import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Vertical line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-cyan-500" />

          <div className="space-y-8 md:pl-24">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6 md:p-8 relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute -left-12 mt-2 w-6 h-6 bg-white dark:bg-gray-800 border-4 border-blue-600 rounded-full" />

                {/* Header */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mt-1">
                      {experience.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 md:text-right">
                    <div className="flex items-center gap-2 md:justify-end text-gray-600 dark:text-gray-400">
                      <Calendar size={18} />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 md:justify-end text-gray-600 dark:text-gray-400">
                      <MapPin size={18} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mt-4">
                  {experience.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="flex gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-blue-600 dark:text-blue-400 font-bold flex-shrink-0 mt-1">
                        •
                      </span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="btn-primary"
          >
            Interested? Let's Chat!
          </a>
        </motion.div>
      </div>
    </section>
  )
}
