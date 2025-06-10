/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf2e7',
          300: '#f6e8d7',
          400: '#f0d7c3',
          500: '#e8c2a3',
          600: '#daa882',
          700: '#c88e61',
          800: '#b67747',
          900: '#94602f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};