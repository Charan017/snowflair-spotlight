/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryText: "#FFFFFF",
        secondaryText: "#F1F1F1",
        textThree: "#E1E1E1",
        borderColor: "#343046",
        lightPurple: "#C0B3E5",
        portGore: "#20193B",
        gradientStart: "#9f8dd8",
        gradientEnd: "#4427a3",
        radialGradientEnd: "#0F0E11",
        textLink: "#3E8DCE",
        OpenPositionCardColor: "#1C192C80",
        badge: "#DAD4EE1A",
        profileIconBorderColor: "#101010",
        profileIconBackgroundColor: "#1E1C24",
        tooltipBackgroundColor: "#1B1825",
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "14px",
        lg: "16px",
        xl: "18px",
        "2xl": "20px",
        "3xl": "22px",
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 700,
        bold: 800,
      },
      lineHeight: {
        16: "16px",
        19: "19px",
        22: "22px",
        24: "24px",
        26: "26px",
        27: "27px",
        32: "32px",
        33: "33px",
      },
    },
  },
  plugins: [],
};
