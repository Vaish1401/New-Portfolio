/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#e11d48',
        secondary: '#1f2937',
        accent: '#f472b6',
        blush: {
          50: '#fffafb',
          100: '#fff1f5',
          200: '#ffe4ee',
          300: '#ffd0e3',
          400: '#ffb3d0',
          500: '#ff8fbc',
          600: '#f2639f',
        },
        ink: {
          DEFAULT: '#1c1419',
          muted: '#5c4f56',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(244, 114, 182, 0.12), 0 8px 32px -8px rgba(15, 23, 42, 0.08)',
        'soft-lg': '0 12px 40px -8px rgba(244, 114, 182, 0.18), 0 4px 16px rgba(15, 23, 42, 0.06)',
        'glow-pink': '0 0 60px -12px rgba(251, 207, 232, 0.9)',
        premium:
          '0 2px 4px -1px rgba(28, 20, 25, 0.04), 0 12px 24px -8px rgba(28, 20, 25, 0.06), 0 28px 56px -20px rgba(190, 24, 93, 0.09)',
        'premium-dark':
          '0 2px 8px -2px rgba(0, 0, 0, 0.45), 0 16px 40px -12px rgba(0, 0, 0, 0.55), inset 0 1px 0 0 rgba(255, 255, 255, 0.04)',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        400: '400ms',
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out',
        slideInLeft: 'slideInLeft 0.6s ease-out',
        slideInRight: 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backdropFilter: {
        none: 'none',
        blur: 'blur(10px)',
      },
    },
  },
  plugins: [],
}
