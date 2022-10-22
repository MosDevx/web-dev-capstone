/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {

    fontFamily: {
      display: ['Montserrat'],
      body: ['Lato'],
    },

    extend: {
      colors: {
        primary: {
          black: '#272A31',
          orange: '#f14e0e',
          grey: '#535353',
          'light-grey': '#f5f5f5',
        },

      },
    },
  },
  plugins: [],
};