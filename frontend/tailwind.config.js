/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // wichtig!
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  // tailwind.config.js
extend: {
  fontFamily: {
    fantasy: ['"Cinzel Decorative"', 'serif'],
  }
}
};
