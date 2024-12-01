/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",  // Add your main HTML file
    "./*.{html,js}", // Include any other HTML or JS files in the root
  ],
  theme: {
    container: {
      center: true, // Centers the container by default
      padding: "1rem", //Adds default padding (adjust as needed)
    },
    extend: {
      fontfamily: {
        sans: ['Poppins', 'sans-serif'], //Replace the default sans-serif font
      },
      colors: {
        //Custom colors
        custombeige: '#bf7c12',
        customwhite: '#F4F1EC',
        customdark: '#23262C',
      },
    },
  },
  plugins: [],
};

