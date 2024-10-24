/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1F4590",
        secondary: "#FFA451",
        semiPrimary: "#355DAB",
        coklat: "#B8886A",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
