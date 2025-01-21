import type { Config } from "tailwindcss";

export default {
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
      animation: {
        'stack-in': 'stack-in 0.1s ease-out', // Kan tas bort om den inte används
      },
      keyframes: {
        'stack-in': {
          '0%': {
            transform: 'translateY(10px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'], // Lägger till Playfair
      },
    },
  },
  plugins: [],
} satisfies Config;
