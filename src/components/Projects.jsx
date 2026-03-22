import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const projects = [
    {
      title: 'StayVista – Hotel & Homestay Booking Clone',
      description:
        'An Airbnb-inspired booking platform that allows users to explore, filter, and book stays with real-time data handling. Designed for seamless user experience with secure authentication and dynamic listing management.',
      techStack: ['React.js', 'JavaScript', 'Firebase', 'Tailwind CSS', 'React Router'],
      highlights: [
        'Built platform with 50+ stay listings and dynamic search functionality',
        'Implemented Firebase Authentication for secure login and signup',
        'Used Firestore for real-time booking and wishlist management',
        'Developed 5+ advanced filters to improve user search experience',
        'Optimized UI/UX reducing booking bounce rate by 25%',
      ],
      githubUrl: 'https://github.com/Vaish1401/stayvista-booking-app',
      liveUrl: null,
      image: '🛍️',
    },
    {
      title: 'FocusTrackr – Pomodoro & Task Tracker',
      description:
        'A productivity-focused web application that helps users manage tasks and improve focus using the Pomodoro technique, with real-time tracking and an intuitive dashboard.',
      techStack: ['React.js', 'JavaScript', 'Firebase', 'Tailwind CSS'],
      highlights: [
        'Developed Pomodoro timer with task management dashboard',
        'Enabled real-time task and session tracking using Firestore',
        'Used by 30+ users to monitor productivity and daily goals',
        'Integrated countdown timers and session controls for better focus',
        'Improved user productivity engagement by 40%',
      ],
      githubUrl: 'https://github.com/Vaish1401/FocusTrackr',
      liveUrl: null,
      image: '✓',
    },
    {
      title: 'Portfolio Website (This Site)',
      description:
        'A modern, responsive portfolio website showcasing skills, experience, and projects. Built with React and Tailwind CSS with features like dark mode toggle, smooth animations, and contact form.',
      techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      highlights: ['Light/Dark mode toggle', 'Smooth scroll animations', 'Fully responsive design'],
      githubUrl: 'https://github.com/Vaish1401/New-Portfolio',
      liveUrl: null,
      image: '💼',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="projects"
      className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-blush-50/70 via-white/35 to-blush-100/25 dark:from-gray-950 dark:via-ink dark:to-gray-950"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-eyebrow">Selected work</p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="section-divider origin-center"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card overflow-hidden group"
            >
              <div className="relative h-48 bg-gradient-to-br from-rose-200/90 via-pink-100 to-rose-100 dark:from-rose-900/50 dark:via-pink-950/40 dark:to-rose-950/60 flex items-center justify-center text-8xl overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.5),transparent_50%)] dark:opacity-30" />
                <span className="relative drop-shadow-sm">{project.image}</span>
              </div>

              <div className="p-7">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-ink dark:text-white mb-3 leading-snug">
                  {project.title}
                </h3>

                <p className="text-ink/75 dark:text-stone-400 mb-5 leading-relaxed text-[0.95rem]">
                  {project.description}
                </p>

                <div className="mb-5 space-y-2">
                  {project.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-rose-500 dark:text-rose-400 mt-0.5">✓</span>
                      <span className="text-ink-muted dark:text-stone-500">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-7">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1.5 bg-rose-50 dark:bg-rose-950/50 text-rose-800 dark:text-rose-200/90 text-xs font-medium rounded-full border border-rose-100/80 dark:border-rose-900/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-100/90 dark:bg-rose-950/50 text-ink dark:text-stone-200 text-sm font-medium border border-stone-200/80 dark:border-rose-900/40 hover:bg-blush-100 dark:hover:bg-rose-900/40 transition-colors"
                  >
                    <Github size={18} strokeWidth={1.75} />
                    Code
                  </a>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:brightness-105 shadow-soft transition-all"
                    >
                      <ExternalLink size={18} strokeWidth={1.75} />
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-ink-muted dark:text-stone-500 mb-6">
            Ready to see more of my work?
          </p>
          <a
            href="https://github.com/Vaish1401/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Github size={20} strokeWidth={1.75} />
            Visit My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
