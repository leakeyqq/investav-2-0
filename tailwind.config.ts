import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Spicy yellow-green theme
        primary: {
          DEFAULT: "hsl(85, 70%, 35%)", // Vibrant green
          foreground: "hsl(0, 0%, 98%)",
          50: "hsl(85, 80%, 95%)",
          100: "hsl(85, 80%, 90%)",
          200: "hsl(85, 75%, 80%)",
          300: "hsl(85, 75%, 70%)",
          400: "hsl(85, 70%, 50%)",
          500: "hsl(85, 70%, 35%)",
          600: "hsl(85, 70%, 30%)",
          700: "hsl(85, 70%, 25%)",
          800: "hsl(85, 70%, 20%)",
          900: "hsl(85, 70%, 15%)",
        },
        accent: {
          DEFAULT: "hsl(45, 95%, 50%)", // Vibrant yellow
          foreground: "hsl(0, 0%, 12%)",
          50: "hsl(45, 95%, 95%)",
          100: "hsl(45, 95%, 90%)",
          200: "hsl(45, 95%, 80%)",
          300: "hsl(45, 95%, 70%)",
          400: "hsl(45, 95%, 60%)",
          500: "hsl(45, 95%, 50%)",
          600: "hsl(45, 95%, 40%)",
          700: "hsl(45, 95%, 30%)",
          800: "hsl(45, 95%, 20%)",
          900: "hsl(45, 95%, 10%)",
        },
        // Sidebar colors (using our new palette)
        sidebar: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(0, 0%, 12%)",
          accent: "hsl(85, 70%, 95%)",
          "accent-foreground": "hsl(85, 70%, 35%)",
          border: "hsl(0, 0%, 90%)",
          ring: "hsl(85, 70%, 35%)",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config

