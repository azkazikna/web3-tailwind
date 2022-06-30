/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["'Helvetica Neue'", 'sans-serif'],
        dmsans: ["'DM Sans'", 'sans-serif'],
      },
      colors: {
        'white60': 'rgba(255,255,255, 0.4)',
      },
    },
  },
  plugins: [],
}
