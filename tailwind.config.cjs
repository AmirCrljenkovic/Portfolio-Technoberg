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
      keyframes: {
        scrollTape: {
          '0%': { transform: 'translateX(100%) rotate(6deg)' },
          '100%': { transform: 'translateX(-100%) rotate(6deg)' },
        },
      },
      animation: {
        'scroll-tape': 'scrollTape 10s linear infinite', // Adjust the duration as needed
      },
    },
  },
  darkMode: 'class', // Enable class-based dark mode
  plugins: [],
};

