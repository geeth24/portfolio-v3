/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gilroy', 'sans-serif'],
      },
      colors: {
        primary: '#98ADCE',
        secondary: '#0066FF',
        background: '#000510',
        white: '#DAE1EB',
      },
    },
    variants: {
      extend: {
        display: ['group-hover'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
