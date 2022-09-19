/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
  darkMode: false, // or 'media' or 'class'
}