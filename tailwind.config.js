/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      c1: "#033465",
      c2: "#81e8dc",
      c3: "#4acace",
      c4: "#f1ff5e",
      c5: "#5df4bf",

      txt: {
        b: "#121521",
        g: "#737373",
        g2: "#BDBDBD",
        w: "#f9ffff",
      },
    },

    extend: {},

    fontFamily: {
      sans: ["Montserrat"],
      serif: ["Montserrat"],
      mono: ["Montserrat"],
    },
  },
  plugins: [],
};
