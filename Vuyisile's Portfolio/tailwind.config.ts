import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0f172a",
        surface: "#f8fafc",
        ink: "#1f2937",
        muted: "#6b7280",
        accent: "#3b82f6",
        accentSoft: "#eaf2ff",
        navy: "#0f172a",
        greenDeep: "#10b981",
        slate: "#e5e7eb",
        border: "#e5e7eb",
        lightText: "#f8fafc",
        darkText: "#1f2937"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(31, 41, 55, 0.06)"
      }
    }
  },
  plugins: []
};

export default config;
