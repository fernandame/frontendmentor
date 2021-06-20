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
        "dark-violet": "#34313D",
        "primary-violet": "#3A3054",
        "lighter-violet": "#4B3F6B",
        "dark-gray": "#9E9AA8",
        "lighter-gray": "#EFF1F7",
        "primary-blue": "#2BD0D0",
        "lighter-blue": "#9AE3E3",
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
