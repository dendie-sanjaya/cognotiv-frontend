/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,vue,js,ts,jsx,tsx}",  
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}