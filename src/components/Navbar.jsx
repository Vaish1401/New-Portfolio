import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar({ isDark, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed w-full top-0 z-[100] border-b border-stone-200/50 dark:border-rose-950/50 bg-white/75 dark:bg-ink/80 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/65 dark:supports-[backdrop-filter]:bg-ink/70 shadow-[0_8px_32px_-12px_rgba(28,20,25,0.08)] dark:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.5)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[4.5rem]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0"
          >
            <a
              href="#home"
              className="font-display text-[1.35rem] font-medium tracking-tight bg-gradient-to-r from-rose-700 via-pink-600 to-rose-500 bg-clip-text text-transparent dark:from-rose-200 dark:via-pink-200 dark:to-rose-100"
            >
              VS
            </a>
          </motion.div>

          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative px-3.5 py-2 text-[0.8125rem] font-medium tracking-wide text-ink/65 dark:text-stone-400 hover:text-ink dark:hover:text-stone-100 transition-colors duration-300"
              >
                {link.name}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-px scale-x-0 bg-gradient-to-r from-rose-400 to-pink-400 group-hover:scale-x-100 transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="ml-5 p-2.5 rounded-full border border-stone-200/80 dark:border-rose-800/60 bg-white/90 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100 hover:bg-blush-50 dark:hover:bg-rose-900/50 shadow-sm hover:shadow-md transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={19} strokeWidth={1.75} /> : <Moon size={19} strokeWidth={1.75} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full border border-stone-200/80 dark:border-rose-800/60 bg-white/90 dark:bg-rose-950/40"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-ink dark:text-stone-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden pb-6 border-t border-stone-100 dark:border-rose-950/50 mt-0 pt-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 px-2 text-sm font-medium text-ink/80 dark:text-stone-300 border-b border-stone-100/80 dark:border-rose-950/30 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
