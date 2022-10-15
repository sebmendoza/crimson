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
    },
  },

  plugins: [],
};
