/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#087BE8',
          'blue-hover': '#0663BC',
          'blue-light': '#EBF5FF',
          orange: '#F36B12',
          'orange-hover': '#D95808',
          'orange-light': '#FFF3EB',
          navy: '#122746',
          'navy-dark': '#0B192E',
          'navy-light': '#1E3A63',
          grey: '#F3F6FA',
          'grey-dark': '#E2E8F0',
          body: '#263445',
          muted: '#64748B',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(18, 39, 70, 0.08), 0 4px 6px -2px rgba(18, 39, 70, 0.04)',
        'card-hover': '0 20px 35px -5px rgba(8, 123, 232, 0.15), 0 10px 15px -3px rgba(18, 39, 70, 0.08)',
        'glow-blue': '0 0 25px rgba(8, 123, 232, 0.35)',
        'glow-orange': '0 0 25px rgba(243, 107, 18, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
