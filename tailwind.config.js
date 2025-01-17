/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        solar: {
          white: "#FFFFFF",
          gray: "#2A363D",
          gold: "#FEC155",
          yellow: "#FFD680",
          black: "#1F1E21",
          blue: "#78ADC5",
          lightblue: "#9FE1FF",
        },
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        zendots: ["Zen Dots", "curvsive"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
