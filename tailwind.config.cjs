/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#222831',
        secondary: '#EEEEEE',
        tertiary: '#FF5722',
        quaternary: '#393E46'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif', 'Helvetica']
      }
    }
  },
  plugins: []
}
