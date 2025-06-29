/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: "#1DB954",
          black: "#191414",
          dark: "#121212",
          turquesa: "#075E54",
          gray: "#535353",
          lightgray: "#535353",
          white: "#FFFFFF",
        },
      },
    },

  },
  plugins: [require("daisyui")], // ← esto activa DaisyUI
}
