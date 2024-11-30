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
      colors: {
        //Custom colors
        custombeige: '#bf7c12',
        customwhite: '#F4F1EC',
      },
    },
  },
  plugins: [],
};

