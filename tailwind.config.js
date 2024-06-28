/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F6BD60",
        darkOrange: "#7d5b23",
        lightOrange: "#f6cb87",
        blue: "#D2DCE6",
        darkBlue: "#2e7bc7",
        lightBlue: "#d1e2f4",
        pink: "#F5CAC3",
        darkPink: "#854238",
        lightPink: "#dcc0bb",
        green: "#B3D1CA",
        darkGreen: "#466255",
        hotpink: "#F28482",
        darkHotpink: "#6d1918",
      },
    },
  },
  plugins: [],
};

// function color() {
//   <div className="bg-[#6d1918]"></div>;
// }
