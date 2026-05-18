/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#f0f0ff',
          100: '#e4e4ff',
          200: '#cdcdff',
          300: '#a9a9ff',
          400: '#8080ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        accent: {
          cyan:   '#22d3ee',
          violet: '#8b5cf6',
          pink:   '#ec4899',
        },
        dark: {
          950: '#03030a',
          900: '#06060f',
          800: '#0d0d1a',
          700: '#12122a',
          600: '#1a1a35',
          500: '#252540',
        },
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'glow':        'glow 2s ease-in-out infinite alternate',
        'gradient':    'gradient 8s ease infinite',
        'slide-up':    'slideUp 0.8s ease forwards',
        'fade-in':     'fadeIn 1s ease forwards',
        'spin-slow':   'spin 20s linear infinite',
        'pulse-slow':  'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%':   { textShadow: '0 0 20px rgba(99,102,241,0.5)' },
          '100%': { textShadow: '0 0 40px rgba(139,92,246,0.9), 0 0 80px rgba(99,102,241,0.4)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          '0%':   { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}
