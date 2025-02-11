module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'sans':['Poppins','sans-serif']
      },

      minWidth: {
        '600': '600px', // Define min-w-600
      },

      backgroundImage:{
        "home":"url('/_assets/bg.png')"
      }       
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
