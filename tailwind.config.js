module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/*.js"
  ],
  theme: {
    screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
    },
    extend: {
      fontFamily:{
        'Mulish':'Mulish, sans-serif'
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")]
};