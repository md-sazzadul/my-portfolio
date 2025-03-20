/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "#9333ea",
        accent: "#f43f5e",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        fancy: ["Dancing Script", "cursive"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        "bounce-slow": "bounce 2s infinite",
      },
      backdropFilter: {
        blur: "blur(10px)",
      },
    },
  },
  plugins: [],
};
