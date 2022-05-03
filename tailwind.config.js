module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["poppins"],
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        wra: {
          primary: "#fdba74",
          secondary: "#f97316",
          accent: "#0f766e",
          neutral: "#181A2A",
          "base-100": "#2c2b2a",
          info: "#5fa19d",
          success: "#b5cd61",
          warning: "#fabd13",
          error: "#a64342",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
