/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", //Main HTML file.
    "./main.js",  //Main JS file.
    "./src/**/*.{html,js}", //All HTML and JS files in dir.
    
  ],
  safelist: [
    'lg:justify-center',
    'lg:items-center',
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: '480px', // Custom small breakpoint
      sm: '640px',  // Small screens (e.g., mobile)
      md: '768px',  // Medium screens (e.g., tablets)
      lg: '1024px', // Large screens (e.g., laptops)
      xl: '1280px', // Extra large screens (e.g., desktops)
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Corrected key
      },
      colors: {
        custombeige: '#bf7c12',
        customwhite: '#F4F1EC',
        customdark: '#23262C',
      },
    },
  },
  plugins: [],
};
