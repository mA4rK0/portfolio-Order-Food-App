/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yes: "#16a34a",
        no: "#dc2626",
      },
    },
  },
  plugins: [],
};
