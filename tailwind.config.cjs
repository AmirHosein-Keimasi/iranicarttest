/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#2752E7",
          80: "#5275EC",
          60: "#7D97F1",
          40: "#D0DBFF",
          20: "#F5F8FE",
        },
        base: {
          100: "#111111",
          80: "#707070",
          60: "#A0A0A0",
          40: "#CFCFCF",
          20: "#E3E3E3",
          0: "#FFFFFF",
        },
        error: {
          100: "#E25C5C",
          80: "#E87D7D",
          60: "#EE9D9D",
          40: "#F3BEBE",
          20: "#F9DEDE",
        },
        success: {
          100: "#53D258",
          80: "#75DB79",
          60: "#98E49B",
          40: "#BAEDBC",
          20: "#DDF6DE",
        },
      },
      fontSize: {
        h1: ["40px", "125%"], // T H1- 40/125
        h2: ["32px", "125%"], // T H2- 32/125
        h3: ["30px", "125%"], // T H3- 30/125
        h4: ["28px", "130%"], // T H4- 28/130
        h5: ["22px", "135%"], // T H5- 22/135

        // Body - Semibold
        "sb-xxl": ["20px", "130%"], // Ag XXL - 20/130 (Semibold)
        "sb-xl": ["18px", "135%"], // Ag XL - 18/135 (Semibold)
        "sb-l": ["16px", "150%"], // Ag L - 16/150 (Semibold)
        "sb-m": ["14px", "155%"], // Ag M - 14/155 (Semibold)
        "sb-s": ["12px", "165%"], // Ag S - 12/165 (Semibold)
        "sb-xs": ["10px", "165%"], // Ag XS - 10/165 (Semibold)

        // Body - Regular
        "rg-xxl": ["20px", "130%"], // Ag XXL - 20/130 (Regular)
        "rg-xl": ["18px", "135%"], // Ag XL - 18/135 (Regular)
        "rg-l": ["16px", "150%"], // Ag L - 16/150 (Regular)
        "rg-m": ["14px", "155%"], // Ag M - 14/155 (Regular)
        "rg-s": ["12px", "165%"], // Ag S - 12/165 (Regular)
        "rg-xs": ["10px", "165%"], // Ag XS - 10/165 (Regular)
      },
      fontFamily: {},
      fontWeight: {
        semibold: 600,
        regular: 400,
      },
    },
  },
  plugins: [],
};
