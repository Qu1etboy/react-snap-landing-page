/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./src/images/image-hero-desktop.png')",
      },
      keyframes: {
        silde: {
          "0%": { transform: "translateX(-100px)" },
          "100%": { transform: "translateX(0px" },
        },
      },
      animation: {
        silde: "silde 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
