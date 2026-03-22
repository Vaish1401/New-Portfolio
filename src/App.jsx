import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="relative isolate min-h-screen overflow-x-hidden bg-[radial-gradient(ellipse_140%_90%_at_50%_-30%,rgba(253,242,248,0.95),transparent_50%),radial-gradient(ellipse_80%_50%_at_100%_0%,rgba(255,228,240,0.5),transparent_45%),radial-gradient(ellipse_60%_40%_at_0%_80%,rgba(255,241,246,0.6),transparent_50%)] dark:bg-[radial-gradient(ellipse_120%_70%_at_50%_-20%,rgba(88,28,53,0.45),transparent_55%),radial-gradient(ellipse_90%_60%_at_100%_20%,rgba(131,24,67,0.25),transparent_50%)] bg-blush-50 dark:bg-ink text-ink dark:text-stone-100 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
        <div className="premium-grain" aria-hidden />
        <div className="premium-content">
          <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
