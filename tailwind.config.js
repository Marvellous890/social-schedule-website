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
      },
      backgroundImage: {
        "btn-linear": "linear-gradient(to right, #369E24, #116F01)",
        "dropping-soon-grd": "linear-gradient(to right, #FFFFFF 21%, #838080 86%)",
        "linear-e": "linear-gradient(to right, #3F84ED, #7CAAF1)"
      },
    },
  },
  plugins: [],
};
