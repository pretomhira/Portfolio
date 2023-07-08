/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#5c6ac4",
        secondary: "#ecc94b",
        // ...
      },
      keyframes: {
        slowSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        reverseSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        grow: {
          "0%": { width: "5%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        mySpin: "slowSpin 30s linear infinite",
        myReverseSpin: "reverseSpin 30s linear infinite",
        myGrow: "grow 2s linear forwards",
      },
    },
  },
  plugins: [],
};
