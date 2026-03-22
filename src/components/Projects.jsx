import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const projects = [
    {
      title: 'SmartHire – AI-Powered Job Application Tracker',
      description:
        'A full-stack AI-powered job application tracker that helps users manage applications, track progress, and gain actionable insights through real-time analytics. Built with a scalable microservices architecture and optimized for performance, security, and seamless user experience.',
      techStack: ['React.js', 'Tailwind CSS','Node.js','Spring Boot','MySQL','REST APIs','Docker','AWS S3','JWT Auth','Chart.js','GitHub Actions'],
      highlights: [
        'Secure JWT-based authentication with role-based access control (RBAC)',
        'Real-time analytics dashboard with application funnels and conversion metrics',
        '10+ optimized REST APIs with <150ms response time',
        'Automated follow-up reminders to reduce missed opportunities',
        'Cloud-based resume storage using AWS S3',
        'Dockerized deployment with CI/CD pipelines via GitHub Actions',
        'Responsive, mobile-first UI with fast load times (<1.5s on 3G)'
      ],
      githubUrl: '#',
      //liveUrl: '#',
      image: '🛍️',
    },
    {
      title: 'StayVista – Hotel & Homestay Booking Clone',
      description:
        'An Airbnb-inspired booking platform that allows users to explore, filter, and book stays with real-time data handling. Designed for seamless user experience with secure authentication and dynamic listing management.',
      techStack: ['React.js','JavaScript','Firebase','Tailwind CSS','React Router'],
      highlights: [
        'Built platform with 50+ stay listings and dynamic search functionality',
        'Implemented Firebase Authentication for secure login and signup',
        'Used Firestore for real-time booking and wishlist management',
        'Developed 5+ advanced filters to improve user search experience',
        'Optimized UI/UX reducing booking bounce rate by 25%',
      ],
      githubUrl: 'https://github.com/Vaish1401/stayvista-booking-app',
      //liveUrl: '#',
      image: '🛍️',
    },
    {
      title: 'FocusTrackr – Pomodoro & Task Tracker',
      description:
        'A productivity-focused web application that helps users manage tasks and improve focus using the Pomodoro technique, with real-time tracking and an intuitive dashboard.',
      techStack: ['React.js',
        'JavaScript',
        'Firebase',
        'Tailwind CSS'],
      highlights: [
        'Developed Pomodoro timer with task management dashboard',
        'Enabled real-time task and session tracking using Firestore',
        'Used by 30+ users to monitor productivity and daily goals',
        'Integrated countdown timers and session controls for better focus',
        'Improved user productivity engagement by 40%'
      ],
      githubUrl: 'https://github.com/Vaish1401/FocusTrackr',
      //liveUrl: '#',
      image: '✓',
    },
    // {
    //   title: 'Weather Dashboard',
    //   description:
    //     'A weather information dashboard that fetches real-time data from APIs. Features include city search, 5-day forecast, and weather visualization with dynamic backgrounds based on weather conditions.',
    //   techStack: ['React.js', 'JavaScript', 'API Integration', 'CSS3'],
    //   highlights: [
    //     'Real-time weather data fetching',
    //     'Dynamic UI based on weather conditions',
    //     'Search functionality with debouncing',
    //   ],
    //   githubUrl: '#',
    //   liveUrl: '#',
    //   image: '⛅',
    // },
    {
      title: 'Portfolio Website (This Site)',
      description:
        'A modern, responsive portfolio website showcasing skills, experience, and projects. Built with React and Tailwind CSS with features like dark mode toggle, smooth animations, and contact form.',
      techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      highlights: [
        'Light/Dark mode toggle',
        'Smooth scroll animations',
        'Fully responsive design',
      ],
      githubUrl: 'https://github.com',
      //liveUrl: '#',
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
          Featured Projects
        </motion.h2>

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
              className="card overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-8xl">
                {project.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4 space-y-2">
                  {project.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center gap-2 text-sm">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Ready to see more of my work?
          </p>
          <a
            href="https://github.com/Vaish1401/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Github size={20} />
            Visit My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
