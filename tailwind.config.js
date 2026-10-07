/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FFFFFF',
        'canvas-subtle': '#FAFAFA',
        'canvas-muted': '#F1F3F4',
        'border-light': '#E5E7EB',
        'border-subtle': '#F1F3F4',
        charcoal: {
          900: '#202124', // Dark charcoal
          800: '#303134',
          700: '#3C4043',
          600: '#5F6368', // Medium gray
          500: '#5F6368',
          400: '#80868B',
          300: '#BDC1C6',
          200: '#DADCE0',
          100: '#F1F3F4',
        },
        google: {
          blue: '#4285F4',
          'blue-hover': '#3367D6',
          'blue-subtle': '#E8F0FE',
          red: '#EA4335',
          'red-subtle': '#FCE8E6',
          yellow: '#FBBC05',
          'yellow-subtle': '#FEF7E0',
          green: '#34A853',
          'green-subtle': '#E6F4EA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(32, 33, 36, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(32, 33, 36, 0.045) 1px, transparent 1px)",
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(32, 33, 36, 0.05), 0 1px 2px rgba(32, 33, 36, 0.03)',
        'premium': '0 10px 30px -10px rgba(32, 33, 36, 0.08), 0 4px 6px -2px rgba(32, 33, 36, 0.03)',
        'tech-card': '0 2px 10px rgba(32, 33, 36, 0.03), 0 1px 2px rgba(32, 33, 36, 0.04)',
      }
    },
  },
  plugins: [],
}
