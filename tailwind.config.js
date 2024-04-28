/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*{.html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    fontFamily: {
      'main': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'clr-background': '#F4F4F4',
        'clr-primary': '#3F51B5',
        'clr-hover': '#1976D2',
        'clr-text': '#333333',
        'dark-black': '#2f2e41',
        'very-dark-blue': '#1d2025',
        'grayish-blue': '#b6bcc8',
      },
    },
  },
  plugins: [],
}

