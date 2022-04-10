module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "0",
      sm: "648px",
      md: "720px",
      lg: "1024px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
