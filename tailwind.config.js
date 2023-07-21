/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary colors
        blue: {
          DEFAULT: "#007ACC",
          light: "#4DB1FF",
          dark: "#005EA6",
        },
        // Secondary colors
        orange: {
          DEFAULT: "#FFA500",
          light: "#FFC04D",
          dark: "#CC7A00",
        },
        // Gray colors
        gray: {
          DEFAULT: "#808080",
          lighter: "#C0C0C0",
          dark: "#404040",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/pic.png')",
      },
    },
  },
  plugins: [],
};
