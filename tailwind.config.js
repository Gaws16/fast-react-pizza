/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    extend: {
      colors: {
        pizza: "#f44336",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
