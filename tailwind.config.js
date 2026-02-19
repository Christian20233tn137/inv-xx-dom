/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#C2CAB0',
          100: '#B9C0AA',
          200: '#B2C28F',
          300: '#A3B280',
          400: '#95B54A',
          500: '#7A9834',
          600: '#5C7326',
          700: '#3E4D19',
          800: '#2D3715',
          900: '#2C3418',
          950: '#2B311B',
          1000: '#2B311B',
        },
        'secondary': {
          50: '#F5FFFA',
          100: '#E5FFF2',
          200: '#CCFFE6',
          300: '#ADFFD6',
          400: '#7AFFBD',
          500: '#47FFA3',
          600: '#14FF8A',
          700: '#00E070',
          800: '#09AE5C',
          900: '#127D47',
          950: '#155636'
        },
        'quartz': {
          50: '#F7FDFD',
          100: '#F0FCFF',
          200: '#E6F9FF',
          300: '#D7F5F5',
          500: '#F9FFFE',
          900: '#FFFFFF',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Lato', 'sans-serif'],
        elegant: ['"Great Vibes"', 'cursive'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'fade-in': 'fade-in 1.5s ease-out forwards',
        'pulse-slow': 'pulse-slow 3s infinite',
      },
    },
  },
  plugins: [],
}
