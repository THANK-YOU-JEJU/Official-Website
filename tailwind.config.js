/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        shadows: ["Shadows Into Light", "cursive"],
        andika: ["Andika", "sans-serif"]
      }
    },
  },
  plugins: [],
}