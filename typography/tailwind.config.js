module.exports = {
  content: ["./public/**/*.{html,js}", "./src/js/theme.js"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        22: "5.5rem",
      },
      inset: {
        18: "4.5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
