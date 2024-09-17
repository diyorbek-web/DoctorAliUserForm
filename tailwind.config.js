/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "rotate-y": "rotateY 6s ease-in-out infinite",
        "rotate-y-delay": "rotateY 6s ease-in-out infinite 3s",
      },
    },
  },
  plugins: [],
};
