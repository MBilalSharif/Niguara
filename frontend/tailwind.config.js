/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#ff003c",
        dark: "#111111",
        accent: "#1f1f1f",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 15px rgba(255, 0, 60, 0.6)",
      },
    },
  },
  plugins: [],
};