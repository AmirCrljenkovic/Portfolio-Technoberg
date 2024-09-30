/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#222831', // Custom dark mode background color
      },
    },
  },
  darkMode: 'class', // Enable class-based dark mode
  plugins: [],
};
