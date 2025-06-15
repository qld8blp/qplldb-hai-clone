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
        // HAI Brand Colors - extracted from original website
        hai: {
          primary: '#1e3a8a',
          navy: '#1e40af', 
          'light-blue': '#3b82f6',
          orange: '#ea580c',
          green: '#16a34a',
        },
        // Refined gray palette matching HAI design
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        // Clean sans-serif matching HAI typography
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem', 
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        // Primary content container matching HAI layout
        'container': '1200px',
      },
      boxShadow: {
        // Card shadows matching HAI design system
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 15px rgba(0, 0, 0, 0.15)',
        'hai-nav': '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'card': '0.5rem',
      },
      transitionProperty: {
        'card': 'transform, box-shadow',
      }
    },
  },
  plugins: [],
};
export default config;