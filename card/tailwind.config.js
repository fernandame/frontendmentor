module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screen: {
      desktop: "1440px",
    },
    fontFamily: {
      inter: "Inter",
      lexend: ['"Lexend Deca"'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
