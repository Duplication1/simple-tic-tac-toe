/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html", 
    "./**/*.js", 
    "./node_modules/flowbite/**/*.js"  // Ensures that Flowbite components are scanned
  ],
  theme: {
    extend: {
      spacing: {
        '128': '24rem',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'), // Correctly load Flowbite plugin
  ],
}
