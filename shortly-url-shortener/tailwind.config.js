module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: "Poppins",
    },
    extend: {
      colors: {
        violet: {
          default: "#3A3054",
          dark: "#34313D",
          light: "#4B3F6B",
          footer: "#232127",
        },
        blue: {
          default: "#2BD0D0",
          light: "#9AE3E3",
        },
        gray: {
          light: "#EFF1F7",
          dark: "#9E9AA8",
          footer: "#BFBFBF",
        },
        "orange-red": "#F46363",
      },
      fontSize: {
        s: [
          "15px",
          {
            lineHeight: "26px",
          },
        ],
        "7xl": [
          "4.5rem",
          {
            letterSpacing: "-2px",
            lineHeight: "112%",
          },
        ],
        "8xl": [
          "6rem",
          {
            letterSpacing: "-2px",
            lineHeight: "112%",
          },
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
