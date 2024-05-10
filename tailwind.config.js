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
        // 'light': '#EDEFF3',
        // 'dark': '#151425',
        // 'gray': '#727C85',
        // 'light-blue': '#206EF3',
        
        'dark': '#040F16',
        'light': '#FBFBFF',
        'blue-dark': '#0B4F6C',
        'blue-light': '#01BAEF',
        'red': '#B80C09'
      },
    },
  },
  plugins: [],
}

