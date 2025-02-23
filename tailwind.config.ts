import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        background: "#0A0A1B",
        foreground: "#E2E8F0",
        muted: "#1E2A45",
        accent: "#0EA5E9",
        border: "#1E293B",
        card: "rgba(16, 23, 42, 0.7)",
        neon: {
          blue: "#0EA5E9",
          glow: "#0EA5E980"
        }
      },
      fontFamily: {
        sans: ["Lexend", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["Outfit", "system-ui", "sans-serif"]
      },
      keyframes: {
        "fade-up": {
          "0%": { 
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-left": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "slide-right": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "scale": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0"
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1"
          }
        },
        "neon-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 5px theme(colors.neon.blue), 0 0 20px theme(colors.neon.glow)"
          },
          "50%": {
            boxShadow: "0 0 10px theme(colors.neon.blue), 0 0 30px theme(colors.neon.glow)"
          }
        }
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out",
        "fade-down": "fade-down 0.6s ease-out",
        "slide-left": "slide-left 0.6s ease-out",
        "slide-right": "slide-right 0.6s ease-out",
        "scale": "scale 0.6s ease-out",
        "neon-pulse": "neon-pulse 2s infinite",
        "enter": "fade-up 0.6s ease-out, scale 0.6s ease-out"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
