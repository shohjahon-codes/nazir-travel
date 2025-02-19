import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "100%",
          lg: "1440px",
        },
      },
      fontFamily: {
        playwrite: `Playwrite IN, serif`,
      },
      
    },
  },
  plugins: [],
};

export default config;
