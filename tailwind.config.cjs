const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: colors.slate,
        primary: colors.sky,
        success: colors.emerald,
        warning: colors.amber,
        danger: colors.rose,
      },
    },
  },
  plugins: [],
};
