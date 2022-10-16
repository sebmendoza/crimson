/** @type {import('tailwindcss').Config} */

// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "crimson-blue": "#ABC9FF",
        "crimson-p-pink": "#FFDEDE",
        "crimson-d-pink": "#FF8B8B",
        "crimson-red": "#EB4747",
        "crimson-d-grey": "#373636",
      },
      boxShadow: {
        "card": "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
      }
    },
  },

  plugins: [],
};
