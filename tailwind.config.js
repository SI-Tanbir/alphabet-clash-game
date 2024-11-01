/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily:{
       'anton': ['Anton', 'sans-serif'],
        'playwrite': ['Playwrite GB S', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'prociono': ['Prociono', 'serif'],
        }

      },
    },
    plugins: [],
  }