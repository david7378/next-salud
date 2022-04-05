module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        source: ["Source", "Source Sans Pro"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
