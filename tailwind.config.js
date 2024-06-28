/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:       "#29292E",
        secondary:     "#323238",
        primaryText:   "#E1E1E6",
        secondaryText: "#C4C4CC",
        blueLight:     "#2584DC",
        blueLightDark: "#2E6597",
        success:       "#04D361",
        warning:       "#AB222E",
        warningDark:   "#6C0E17",
        alert:         "#FBA94C"
      }
    },
  },
  plugins: [],
}

