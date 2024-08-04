/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "#d11d04",
        secondaryRed: "#6f0f04",
        brown: "#79624e",
        white: "#fdfcf7",
        black: "#190d05",
      },
    },
  },
  plugins: [],
};
