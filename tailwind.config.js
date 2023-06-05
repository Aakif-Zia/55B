/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#495371",
        secondary: "#74959A",
        tertiary: "#98B4AA",
        accent: "#F1E0AC",
      },
    },
  },
  plugins: [],
};
