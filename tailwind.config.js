/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark-Red-Color": "#be123c",
        "custom-black": "#000000",
        "custom-white": "#ffffff",
        "custom-bg-OffWhite": "#faf5f7",
        "custom-grey": "#666666",
        "custom-dark-Grey": "#333333",
        "custom-charcoal-Grey": "#404040",
        "custome-vibrant-Red": "#BE123C",
      },
      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
    fontFamily: {
      DM: ["Poppins", "sans-serif"],
    },
    fontSize: {
      sm: "14px",
      md: "18px",
      lg: "24px",
      xl: "32px",
      base: "16px",
    },
  },
  plugins: [],
};
