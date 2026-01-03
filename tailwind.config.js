/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",   // custom
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#f4f4f4",
        primaryDeep: "#1b1b1726",
        secondary: "#777777",   
        tertiary: "#272626",
        gray: {
          30: "#7b7b7b",
          50: "#585858",
        }
      },
      backgroundImage: {
        hero: "url(/src/assets/bg.png)",
      },
      fontFamily: {
        paci: ["Pacifico", "cursive"], 
      }
    },
  },
  plugins: [],
}
