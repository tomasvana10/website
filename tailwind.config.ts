import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  darkMode: "class",
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          "color-scheme": "dark",
          "primary": "#FF865B",
          "secondary": "#FD6F9C",
          "accent": "#B387FA",
          "neutral": "oklch(26% 0.019 237.69)",
          "neutral-content": "oklch(70% 0.019 237.69)",
          "base-100": "oklch(22% 0.019 237.69)",
          "base-200": "oklch(20% 0.019 237.69)",
          "base-300": "oklch(18% 0.019 237.69)",
          "base-content": "#9fb9d0",
          "info": "#89e0eb",
          "success": "#addfad",
          "warning": "#f1c891",
          "error": "#ffbbbd",
          "--rounded-box": "3rem",
          "--rounded-btn": "3rem",
          "--rounded-badge": "3rem",
        },
        light: {
          "color-scheme": "light",
          "primary": "#8C0327",
          "secondary": "#D85251",
          "accent": "#D59B6A",
          "neutral": "#826A5C",
          "base-100": "#f1f1f1",
          "info": "#42ADBB",
          "success": "#499380",
          "warning": "#E97F14",
          "error": "oklch(53.07% 0.241 24.16)",
          "--rounded-box": "1.2rem",
          "--rounded-btn": "1.2rem",
          "--rounded-badge": "1.2rem",
        },
      },
    ],
  },
};
export default config;
