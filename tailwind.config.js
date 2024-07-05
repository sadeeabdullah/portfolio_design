const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        customBlue: {
          DEFAULT: '#1E90FF',
          dark: '#0066CC',
          light: '#87CEEB',
        },
        customGreen: {
          DEFAULT: '#00FF00',
          dark: '#008000',
          light: '#90EE90',
        },
        textColor:{
          DEFAULT: '#0A4C4B',
        },
        navBg:{
          DEFAULT: '#F0EDFF',
        }
      },
      boxShadow:{
        'custom-shadow': '8px 12px 16px #a5a6ff inset ,  8px 12px 16px #a5a6ff',
      },

    },
  },
  plugins: [],
});