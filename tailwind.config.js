/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*{.html,js}"],
  theme: {
    fontFamily: {
      'main': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'clr-background': '#F4F4F4',
        'clr-primary': '#3F51B5',
        'clr-hover': '#1976D2',
        'clr-text': '#333333',
      },
    },
  },
  plugins: [],
}

