module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-magenta": "hsl(300,43%,22%)",
        "primary-pink": "hsl(333,80%,67%)",
        "neutral-dark-magenta": "hsl(303,10%,53%)",
        "neutral-light-magenta": "hsl(300, 24%, 96%)",
      },
      screens: {
        xs: "340px",
        desktop: "1440px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
