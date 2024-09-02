/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "rotate-y": "rotateY 6s ease-in-out infinite",
        "rotate-y-delay": "rotateY 6s ease-in-out infinite 3s",
      },
      keyframes: {
        rotateY: {
          "0%, 100%": { opacity: "0.5", transform: "rotateY(0deg) scale(0.2)" },
          "5%": { opacity: "1", transform: "rotateY(0deg) scale(1)" },
          "15%": { opacity: "1", transform: "rotateY(90deg) scale(1)" },
          "20%": { opacity: "1", transform: "rotateY(180deg) scale(1)" },
          "25%": { opacity: "1", transform: "rotateY(270deg) scale(1)" },
          "30%": { opacity: "1", transform: "rotateY(360deg) scale(1)" },
          "45%": { opacity: "1", transform: "rotateY(360deg) scale(1)" },
          "50%": { opacity: "0.5", transform: "rotateY(0deg) scale(0.2)" },
          "55%": { opacity: "1", transform: "rotateY(360deg) scale(1)" },
          "60%": { opacity: "1", transform: "rotateY(270deg) scale(1)" },
          "65%": { opacity: "1", transform: "rotateY(180deg) scale(1)" },
          "70%": { opacity: "1", transform: "rotateY(90deg) scale(1)" },
          "75%": { opacity: "1", transform: "rotateY(0deg) scale(1)" },
          "95%": { opacity: "0.5", transform: "rotateY(0deg) scale(0.2)" },
        },
      },
    },
  },
  plugins: [],
};
