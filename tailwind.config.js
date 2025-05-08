/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pColor: "hsl(345, 95%, 68%)",
        cdh3Color: "hsl(237, 18%, 59%)",
      },
      backgroundColor: {
        countdownP: "hsl(236, 21%, 26%)",
      },
      backgroundImage: {
        stars: "url('/src/assets/images/bg-stars.svg')",
        hills: "url('/src/assets/images/pattern-hills.svg')",
      },
      fontFamily: {
        redhatFont: "Red Hat Text , sans-serif",
      },
    },
  },
  plugins: [],
};
