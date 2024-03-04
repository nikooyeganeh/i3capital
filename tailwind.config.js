/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors:{
      'primary':"#005FBB",
      'gray':'#f0f2f2',
      'white':"#FFFFFF",
      'darkGray':'#AFB6BE',
      'success':'#0DBF76',
      'black':'#000000'
    },
    safelist: [
      'bg-primary',
      'font-bold',
      'border-primary',
      'text-primary'
    ],
    extend: {},
  },
  plugins: [],
}

