import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vaishnavisingh1401@gmail.com',
      link: 'mailto:vaishnavisingh1401@gmail.com',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: '@vaishnavi-singh-576300200',
      link: 'https://www.linkedin.com/in/vaishnavi-singh-576300200/',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: '@Vaish1401',
      link: 'https://github.com/Vaish1401',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Noida, Uttar Pradesh, India',
      link: null,
    },
  ]

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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="contact"
      className="py-28 md:py-36 px-4 sm:px-6 lg:px-10 bg-white/60 dark:bg-gray-950/35"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-eyebrow">Contact</p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="section-divider origin-center mb-12"
        />

        <motion.p
          className="text-center text-lg text-ink-muted dark:text-stone-400 mb-14 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            className="space-y-5"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <h3 className="font-display text-2xl font-semibold text-ink dark:text-white mb-2">
              Connect With Me
            </h3>

            {contactMethods.map((method, index) => {
              const Icon = method.icon
              const inner = (
                <>
                  <div className="p-3.5 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/50 dark:to-pink-950/30 rounded-xl flex-shrink-0 border border-rose-100/50 dark:border-rose-900/40">
                    <Icon className="text-rose-600 dark:text-rose-300" size={22} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink dark:text-white">
                      {method.title}
                    </h4>
                    <p className="text-ink-muted dark:text-stone-400 mt-1 text-sm">
                      {method.value}
                    </p>
                  </div>
                </>
              )

              if (method.link) {
                return (
                  <motion.a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="card p-5 flex items-start gap-4 hover:scale-[1.01] transition-transform duration-300"
                  >
                    {inner}
                  </motion.a>
                )
              }

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card p-5 flex items-start gap-4"
                >
                  {inner}
                </motion.div>
              )
            })}

            <motion.div
              variants={itemVariants}
              className="mt-8 pt-8 border-t border-rose-100/80 dark:border-rose-900/40"
            >
              <p className="text-ink-muted dark:text-stone-500 mb-4 text-sm">
                Want to see my resume?
              </p>
              <a
                href="https://drive.google.com/file/d/1htDyNP8TRykrKmqUT86tvC_xbMmKUA0w/view?usp=drive_link"
                className="btn-primary text-sm"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="card p-8 md:p-9"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-200 text-sm"
              >
                Thanks for reaching out! I'll get back to you soon.
              </motion.div>
            )}

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink/80 dark:text-stone-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-premium"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink/80 dark:text-stone-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-premium"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-ink/80 dark:text-stone-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-premium"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink/80 dark:text-stone-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="input-premium resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button type="submit" className="w-full btn-primary justify-center mt-2">
                <Send size={20} strokeWidth={1.75} />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
