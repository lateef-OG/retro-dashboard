module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          150: '#2F8AE4',
          250: '#4966D1',
          deep: "#12477C",
          light: "#3D78DB",
          link_bg: "#EDEFFA",
          link_text: "#4E64D0",
        },
        gray: {
          link_text: "#8995A0",
          light: "#F4F8FC",
          input: "#E8EEF4",
        },
        green: {
          deep: '#19B0AC',
        },
        pink: {
          light: '#DB4F95',
        },
        primary_text: "#0A1C27",
        secondary_text: "#86939E",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
