module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
          "main-light-50": "#ebdece66",
          "main-light-100": "#fffff6",
          "main-light-200": "#fffcec",
          "main-light-300": "#fff2e2",
          "main-light-400": "#f5e8d8",
          "main-light-500": "#ebdece",
          "main-light-600": "#e1d4c4",
          "main-light-700": "#d7caba",
          "main-light-800": "#cdc0b0",
          "main-light-900": "#c3b6a6",
          "main-dark-50": "#f7e8cd66",
          "main-dark-100": "#eddec3",
          "main-dark-200": "#e3d4b9",
          "main-dark-300": "#d9caaf",
          "main-dark-400": "#cfc0a5",
          "main-dark-500": "#c5b69b",
          "main-dark-600": "#bbac91",
          "main-dark-700": "#b1a287",
          "main-dark-800": "#a7987d",
          "main-dark-900": "#9d8e73",
          "accent-50": "#674832",
          "accent-100": "#5d3e28",
          "accent-200": "#53341e",
          "accent-300": "#492a14",
          "accent-400": "#3f200a",
          "accent-500": "#351600",
          "accent-600": "#2b0c00",
          "accent-700": "#210200",
          "accent-800": "#170000",
          "accent-900": "#0d0000"
        }
      },
      animation: {
        fade: "fade 0.4s ease-in-out",
        slideDown: "slideDown 1s ease-in-out",
      },
      keyframes: {
        fade: {
          "0%": {scale: 0, opacity: 0},
          "100%": {scale: 1, opacity: 1},
        },
        slideDown: {
          "0%": {transform: "translateY(-70px)", opacity: 0},
          "100%": {transform: "translateY(0)", opacity: 1},
        },
      },
    },
  }