/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        secondary: "#1e40af",
        accent: "#2563eb",
        background: "#0f172a",
        "background-light": "#1e293b",
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
