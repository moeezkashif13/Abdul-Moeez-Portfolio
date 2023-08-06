/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      screens:{
        'forBanner' : '580px',
        'anotherMobile' : '400px',
        'anotherDesktop' : '1100px',
        'forbookingform' : '680px',
        'anotherForBookingForm':'1050px',
        'secondDesktop' : '1300px'
      },
      
      padding:{
        'mobileCommon' : '16px',
        'tabletCommon' : '28px',
        'desktopCommon' : '45px'
      },

      colors:{
        'primary':'#91ff00'
      },
      backgroundColor:{
        'primary' : '#91ff00'
      }
      
    },
  },
  plugins: [],
}
