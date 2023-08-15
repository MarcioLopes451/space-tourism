/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': ''
      }
    },
    colors: {
      'richBlack':'#0B0D17',
      'periwinkle':'#D0D6F9',
      'white':'#FFFFFF',
    },
    fontFamily:{
      'bellefair':['Bellefair','serif'],
      'barlowCondensed':['Barlow Condensed','sans-serif'],

    }
  },
  plugins: [],
}

