/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        'info-btn': '#29303C',
      },
      boxShadow: {
        'header-shadow': 'inset 0 0 0 3000px rgba(150, 150, 150, 0.192);'
      }
    },
  },
  plugins: [],
}

