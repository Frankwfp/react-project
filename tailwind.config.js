/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    '../../components/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'regal-red': '#cc3215'
      }
    },
    borderWidth: {
      10: '10px',
      20: '20px'
    }
  },
  plugins: []
}
