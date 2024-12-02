/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html, ./main.js",
    "./*.{html,js}",
    "./src/**/*.{html,js}", // Include subdirectories if applicable
  ],
  safelist: [
    'xs:bg-green-500',
    'tablet:bg-red-500',
    'wide:bg-yellow-500',
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
      '2xl': '1536px', // Very large screens (e.g., widescreens)
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
