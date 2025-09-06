/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6155F5',
        secondary: '#26A4FF',
        textp: '#25324B',
      },
    },
  },
  plugins: [],
}