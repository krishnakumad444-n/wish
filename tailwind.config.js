/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'romantic-pink': '#FFB6C1',
        'soft-pink': '#FFE4E1',
        'lavender': '#E6E6FA',
        'peach': '#FFDAB9',
        'rose-gold': '#B76E79',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'heartbeat': 'heartbeat 2s ease-in-out infinite',
        'fall': 'fall linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.08)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.08)' },
          '70%': { transform: 'scale(1)' },
        },
        fall: {
          '0%': {
            transform: 'translateY(-10vh) translateX(0px)',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(110vh) translateX(20px)',
            opacity: '0.3',
          },
        },
      },
    },
  },
  plugins: [],
}
