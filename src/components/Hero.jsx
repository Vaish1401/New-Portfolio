import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-[min(100vh,56rem)] flex items-center pt-24 pb-20 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_40%,rgba(251,207,232,0.35),transparent_60%)] dark:bg-[radial-gradient(ellipse_60%_45%_at_15%_35%,rgba(157,23,77,0.2),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-gradient-to-bl from-pink-200/25 to-transparent blur-3xl dark:from-rose-900/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-rose-100/50 to-transparent blur-3xl dark:from-rose-950/25"
        aria-hidden
      />

      <motion.div
        className="relative z-[1] w-full max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-14 lg:gap-16">
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end lg:w-[38%] shrink-0 order-1 lg:order-none"
          >
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-full bg-gradient-to-br from-rose-200/60 via-pink-100/40 to-transparent blur-2xl dark:from-rose-800/20 dark:via-transparent"
                aria-hidden
              />
              <div className="relative rounded-full p-[3px] bg-gradient-to-br from-white via-rose-100 to-pink-200/80 dark:from-rose-900/80 dark:via-rose-950 dark:to-rose-900 shadow-premium dark:shadow-premium-dark">
                <img
                  src="/profile.png"
                  alt="Vaishnavi Singh — professional headshot with a natural outdoor background"
                  width={200}
                  height={200}
                  className="w-40 h-40 sm:w-44 sm:h-44 lg:w-[13.5rem] lg:h-[13.5rem] rounded-full object-cover object-[center_25%]"
                />
              </div>
            </div>
          </motion.div>

          <div className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0 lg:max-w-none">
            <motion.p variants={itemVariants} className="section-eyebrow lg:!text-left">
              Portfolio
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display text-[2.65rem] sm:text-5xl lg:text-[3.25rem] font-medium tracking-tight text-ink dark:text-white mb-4 leading-[1.08]"
            >
              Vaishnavi Singh
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mx-auto lg:mx-0 mb-6 h-px w-16 bg-gradient-to-r from-rose-400/80 to-transparent lg:from-rose-400 lg:to-pink-300/50"
            />

            <motion.h2
              variants={itemVariants}
              className="text-lg sm:text-xl lg:text-[1.35rem] font-normal text-ink/80 dark:text-stone-300 mb-6 leading-snug max-w-lg mx-auto lg:mx-0"
            >
              <span className="font-medium italic font-display text-rose-700/90 dark:text-rose-300/90">
                Software engineer
              </span>
              <span className="text-stone-400 dark:text-stone-500 mx-2">·</span>
              Full stack developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-ink-muted dark:text-stone-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Polished web experiences with React, Node.js, and modern tooling — architecture, performance, and detail in balance.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600/65 dark:text-rose-400/60 mb-10"
            >
              Noida, India
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-3"
            >
              {[
                { href: 'https://github.com/Vaish1401', icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com/in/vaishnavi-singh-567300200/', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:vaishnavisingh1401@gmail.com', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3.5 rounded-2xl bg-white/80 dark:bg-rose-950/35 border border-stone-200/70 dark:border-rose-900/50 text-rose-800 dark:text-rose-200 shadow-sm hover:shadow-premium hover:-translate-y-0.5 dark:hover:shadow-premium-dark transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  aria-label={label}
                >
                  <Icon size={21} strokeWidth={1.65} />
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex justify-center mt-16 lg:mt-20"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-rose-400/70 dark:text-rose-500/60 hover:text-rose-600 dark:hover:text-rose-300 transition-colors duration-300"
            aria-label="Scroll to about"
          >
            <span className="text-[0.6rem] uppercase tracking-[0.35em] font-semibold">Scroll</span>
            <ArrowDown size={22} strokeWidth={1.5} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
