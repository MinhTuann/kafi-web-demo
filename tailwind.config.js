/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "Green-Primary": "#00BFA5",
        "Green-D2": "#00897B",
        "Yellow-Primary": "#FFD54F",
        "Red-D1": "#E53935",
        Grayscale: "#9E9E9E",
        "Grayscale-Black": "#212121",
        "Grayscale-White": "#FFFFFF",
        "Grayscale-D1": "#616161",
        "Grayscale-L1": "#F5F5F5",
        "Grayscale-L3": "#EEEEEE",
        "Grayscale-L4": "#E0E0E0",
        D5: "#424242",
      },
    },
  },
  plugins: [],
};
