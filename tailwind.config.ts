import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        twitter: {
          blue: "#16a374",
          darkBlue: "#0c6b43",
          gray: "#657786",
          lightGray: "#aab8c2",
          lighterGray: "#e1e8ed",
          lime: "#17c06c",
        },
        dark: {
          primary: "#15202b",
          secondary: "#192734",
          accent: "#129c29",
          text: "#ffffff",
          subtext: "#8899a6",
        },
      },
      fontFamily: {
        bebas: ['Otterco', 'sans-serif'],
      },
      boxShadow: {
        'md-dark': '0 2px 8px rgba(0, 0, 0, 0.2)',
      },
      fontWeight: {
        thin: "200",
        extraBold: "800",
      },
      fontSize: {
        'title': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '800' }],
        'paragraph': ['1rem', { lineHeight: '1.5rem', fontWeight: '200' }],
      },
      letterSpacing: {
        extraWide: '0.05em',
      },
      opacity: {
        '7': '0.07',
      },
    },
  },
  plugins: [],
};

export default config;