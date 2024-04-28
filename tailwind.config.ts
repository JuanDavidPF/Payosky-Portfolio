import { nextui } from "@nextui-org/react";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          primary: {
            'DEFAULT': '#FF6F66',
            "100": '#FFECE0',
            "200": '#FFD4C1',
            "300": '#FFB7A3',
            "400": '#FF9C8C',
            "500": '#FF6F66',
            "600": '#DB4A4E',
            "700": '#B73341',
            "800": '#932036',
            "900": '#7A132F',
          },
          secondary: {
            'DEFAULT': '#4A5D59',
            "100": '#ECF6F0',
            "200": '#DBEEE5',
            "300": '#B5CEC4',
            "400": '#859D96',
            "500": '#4A5D59',
            "600": '#364F4D',
            "700": '#254242',
            "800": '#173335',
            "900": '#0E272C',
          },
          danger: {
            DEFAULT: '#FF5B66',
            "100": '#FFE7DE',
            "200": '#FFCABD',
            "300": '#FFA79C',
            "400": '#FF8683',
            "500": '#FF5B66',
            "600": '#DB425A',
            "700": '#B72D4F',
            "800": '#931D45',
            "900": '#7A113E',
          },
          background: '#161B1E',
          content1: '#222B2C'
        }
      }
    }
  })]
};
export default config;
