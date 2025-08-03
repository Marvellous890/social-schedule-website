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
        "blue-100": "#9CBDF3",
        "blue-500": "#0F67EB",
        "blue-800": "#093C8F",
        "cyan-500": "#14C2E0",

        "neutral-200": "#595D5F",
        "neutral-500": "#1A1C1E",
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
