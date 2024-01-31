/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}", // add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}
