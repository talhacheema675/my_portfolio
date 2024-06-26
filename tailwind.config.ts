import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "darkMode: false",
  ],
  theme: {
    extend: {
      backgroundImage: {
       'hero-iamge':"url(/hero1.jpg)"
      },
    },
  },
  plugins: [],
};
export default config;
