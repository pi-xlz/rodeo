/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        "clr-base": "rgba(30, 30, 30, 1)",
        "clr-base-100": "rgba(34, 34, 34, 1)",
        "clr-base-200": "rgba(26, 26, 26, 1)",
        "clr-text-100": "rgba(98, 98, 98, 1)",
        "clr-text-200": "rgba(81, 81, 81, 1)",
        "clr-text-300": "rgba(148, 148, 148, 1)",
        // "clr-text-400": "rgba(148, 148, 148, 1)",
        "clr-accent-100": "rgba(232, 128, 33, 1)",
        "clr-accent-300": "rgba(37, 37, 37, 1)",
        "clr-bg-dropzone": "rgba(43, 43, 43, 1)",
        "shade-one": "rgba(197, 94, 0, 1)",
        "shade-two": "rgba(232, 128, 33, 1)",
        "shade-three": "rgba(251, 185, 124, 1)",
      },
      boxShadow: {
        "dark-shadow": "0px 3px 8px 1px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  plugins: [],
};
