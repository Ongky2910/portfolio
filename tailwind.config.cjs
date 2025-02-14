module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#43cea2",
        secondary: "#185a9d",
        accent: "#2F80ED",
      },
      keyframes: {
        laser: {
          "0%": { boxShadow: "0 0 5px #64ffda, 0 0 10px transparent" },
          "50%": { boxShadow: "0 0 10px #64ffda, 0 0 20px #52e0c4" },
          "100%": { boxShadow: "0 0 5px #64ffda, 0 0 10px transparent" },
        },
      },
      animation: {
        "laser-glow": "laser 1.5s infinite alternate",
      },
    },
  },
  plugins: [],
};
