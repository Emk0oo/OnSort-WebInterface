/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        violet: "#E5B3DE",
      },
      backgroundImage: {
        "presentation": "url('../public/background_section1.png')",
      },
    },
  },
  plugins: [],
};