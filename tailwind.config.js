/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#06030E",
      },
      colors: {
        primary: "#06030E",
        gradiantText: "-webkit-linear-gradient(#FFFFFF, #71717A)",
        // '-webkit-background-clip': 'text',
        // '-webkit-text-fill-color': 'transparent',
      },
    },
  },
  plugins: [],
};
