// tailwind.config.js
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": {
            opacity: "0",
            color: "#ff5733",
            textShadow: "0 0 5px rgba(255, 87, 51, 0.5)",
          },
          "50%": {
            opacity: "1",
            color: "#ffc300",
            textShadow: "0 0 10px rgba(255, 195, 0, 0.8)",
          },
          "100%": {
            opacity: "0",
            color: "#ff5733",
            textShadow: "0 0 5px rgba(255, 87, 51, 0.5)",
          },
        },
      },
      animation: {
        shine: "shine 2s linear infinite",
      },
    },
  },
  plugins: [],
};
