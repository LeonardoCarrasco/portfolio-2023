/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg-color': '#131212',
        'white-text': '#F1EEEE',
        'white-text-2': '#D9D9D9',
        'grey-text': '#928D8D',
        'grey-text-2': '#B8B2B2',
        'card-bg-color': '#212121',
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
        'kanit': ['Kanit', 'sans-serif'],
      },
      boxShadow: {
        'submit-shadow': '0px 8px 27px rgba(71, 26, 76,100)',
      }
    },
  },
  plugins: [],
}

