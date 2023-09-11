/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-Red-Color': '#be123c',
        'custom-black': '#000000',
        'custom-white': '#ffffff',
        'custom-bg-OffWhite': '#faf5f7',
        'custom-grey': '#666666',
        'custom-dark-Grey': '#333333',
        'custom-charcoal-Grey': '#404040',
        'custome-vibrant-Red': '#BE123C',
      },
      screens: {
        'xs': '320px',
        'sm': '480px',
        'md': '768px',
        'lg': '976px',
        'xl': '1440px',
      },
    },
  },
  plugins: [],
}

