/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        big_shoulders: ["Big Shoulders Display", "sans-serif"],
        lexend_deca: ["Lexend Deca", "sans-serif"]
      },
      colors: {
        // primary
        bright_orange: "hsl(31, 77%, 52%)",
        dark_cyan: "hsl(184, 100%, 22%)",
        very_dark_cyan:"hsl(179, 100%, 13%)",
        // neutral
        transparent_white: "hsla(0, 0%, 100%, 0.75)",
        very_light_gray: "hsl(0, 0%, 95%)"
      }
    },
  },
  plugins: [],
}

