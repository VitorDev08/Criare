/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        criare: {
          blue: {
            DEFAULT: '#2B2BA3', // Exact vibrant Royal Blue from the Criare logo
            bright: '#3535C2',
            dark: '#20208D',   // Rich Royal Blue matching logo background
            deep: '#191974',   // Deep Royal Blue for section backgrounds
            card: '#16166A',   // Royal Blue for cards
            soft: '#EEF0FD',
          },
          lime: {
            DEFAULT: '#EAB308',
            hover: '#CA8A04',
            dark: '#A16207',
            light: '#FEF08A',
          },
          yellow: {
            DEFAULT: '#EAB308',
            hover: '#CA8A04',
            light: '#FEF08A',
          },
          dark: {
            900: '#0F172A',
            800: '#1E293B',
            700: '#334155',
          },
          slate: '#475569',
          light: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow-lime': '0 10px 25px -5px rgba(234, 179, 8, 0.25)',
        'glow-blue': '0 10px 25px -5px rgba(43, 43, 163, 0.35)',
        'card-hover': '0 20px 40px -15px rgba(43, 43, 163, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.04)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
