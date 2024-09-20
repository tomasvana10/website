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
        betterblack: {
          "color-scheme": "dark",
          "primary": "#373737",
          "secondary": "#373737",
          "accent": "#373737",
          "base-100": "#010102",
          "base-200": "#141414",
          "base-300": "#262626",
          "base-content": "#d6d6d6",
          "neutral": "#373737",
          "info": "#0000ff",
          "success": "#008000",
          "warning": "#ffff00",
          "error": "#ff0000",
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.97", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
          "--navbar-padding": "1rem",
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
