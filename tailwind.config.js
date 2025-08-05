/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-1": "#154112",
        "disabled-300": "#CDD0D5",

        "blue-25": "#DEE7FA",
        "blue-50": "#BDCFF5",
        "blue-100": "#9CBDF3",
        "blue-500": "#0F67EB",
        "blue-800": "#093C8F",

        "cyan-50": "#D8F5FA",
        "cyan-500": "#14C2E0",

        "neutral-200": "#595D5F",
        "neutral-300": "#434749",
        "neutral-500": "#1A1C1E",

        "indigo-50": "#C4C0FE",
      },
      backgroundImage: {
        "btn-linear": "linear-gradient(to right, #369E24, #116F01)",
        "dropping-soon-grd": "linear-gradient(to right, #FFFFFF 21%, #838080 86%)",
        "linear-e": "linear-gradient(to right, #3F84ED, #7CAAF1)",
        "feature-gradient": "linear-gradient(to right, white, transparent)",
        "feature-gradient-reverse": "linear-gradient(to right, transparent, white)",
      },
    },
  },
  plugins: [],
};
