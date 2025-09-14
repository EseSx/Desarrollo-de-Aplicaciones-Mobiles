/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/*.{jsx,jsx,ts,tsx}", "./components/**/*.{jsx,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: { colors: { "dark-bg": "#2C2A36", "light-purple": "#9B59B6" } },
  },
  plugins: [],
};
