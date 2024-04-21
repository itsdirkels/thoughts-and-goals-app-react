/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./public/**/*.{html}"
  ],
  theme: {
    extend: {
      screens: {
        's': {'max': '450px'},
        'csm': {'max': '850px'},
        'max-h-768': {'max': '768px'}
      },
    },
  },
  plugins: [],
}

