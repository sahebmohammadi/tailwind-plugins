module.exports = {
  content: ["./public/**/*.{html,js}", "./src/js/theme.js"],
  darkMode: "class",
  theme: {
    extend: {
      padding: {
        "2/3": "66.666667%",
        "1/3": "33.33333%",
      },
      width: {
        22: "5.5rem",
      },
      inset: {
        18: "4.5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
};
