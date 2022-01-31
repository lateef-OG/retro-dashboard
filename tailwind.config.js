module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          deep: "#12477C",
          link_bg: "#EDEFFA",
          link_text: "#4E64D0",
        },
        gray: {
          link_text: "#8995A0",
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
