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
        "background-gray": "#EFF1F7",
        "primary-blue": "#2BD0D0",
        "active-blue": "#9AE3E3",
      },
      fontSize: {
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
