/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sciFiAccent: "#00ff88", // Neon green
        sciFiBackground: "#1b1b1b", // Dark background
        sciFiCard: "#333333",
      },
      boxShadow: {
        glow: "0 0 15px #00ff88, 0 0 30px #00ff88",
      },
    },
  },
  plugins: [],
}

