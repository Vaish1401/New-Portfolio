import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/Vaish1401',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/vaishnavi-singh-576300200/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      url: 'mailto:vaishnavisingh1401@gmail.com',
      label: 'Email',
    },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-rose-200/30 dark:border-rose-900/40 bg-gradient-to-b from-ink via-[#1a1218] to-[#0f0a0d] text-[#f5e5ec]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(190,24,93,0.15),transparent)]" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-semibold mb-4 bg-gradient-to-r from-rose-200 via-pink-200 to-rose-100 bg-clip-text text-transparent">
              Vaishnavi Singh
            </h3>
            <p className="text-rose-100/55 text-sm leading-relaxed max-w-xs">
              Full Stack Developer crafting thoughtful interfaces from Noida, India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-rose-300/80 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-rose-100/50">
              <li>
                <a href="#home" className="hover:text-rose-200 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-rose-200 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-rose-200 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-rose-200 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-rose-300/80 mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 border border-rose-400/15 text-rose-100/80 hover:bg-rose-500/20 hover:border-rose-400/40 hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        <hr className="border-rose-400/10 mb-8" />

        <motion.div
          className="text-center text-rose-100/45 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center justify-center gap-2 mb-3">
            Made with <Heart size={16} className="text-rose-400 fill-rose-400/30" /> by Vaishnavi Singh
          </p>
          <p>
            © {currentYear} Vaishnavi Singh. All rights reserved. · React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
