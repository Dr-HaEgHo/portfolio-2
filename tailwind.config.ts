import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary: "#9f1fef",
        accent: "#5d19e6",
        whiteBg: "#F5F7F9",
        blackBg: "#121212",
        greyBg: '#1e1e1f',
        lightGreyBg: '#ededed',
        borderDark: '#383838',
        borderLight: '#d2d2d2',
        linkPanel: '#2b2b2cbf',
        headerDark: "#d6d6d6b2",
        headerLight: "#",
        eerieDark: "#202022",
        eerieLight: "#dddde800"
      }
    },
  },
  plugins: [],
};
export default config;
