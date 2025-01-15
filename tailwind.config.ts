import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        Transparentwhite30: "rgba(243, 243, 243, 0.3)",
        Transparentwhite60: "rgba(243, 243, 243, 0.6)",
      },
    },
  },
  plugins: [],
} satisfies Config;
