module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  fontFamily: {
    sans: ["Roboto", "Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },
  theme: {
    extend: {
      colors: {
        "primary-header": "#00bcd4",
      },
    },
  },
  plugins: [],
};
