/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      colors: {
        cyan: {
          50: '#e0ffff',
          100: '#b3fcfc',
          200: '#80f7f7',
          300: '#4df2f2',
          400: '#1aeded',
          500: '#00e5e5',
          600: '#00b3b3',
          700: '#008080',
          800: '#004d4d',
          900: '#001a1a',
        },
        space: {
          dark: '#0a0a2e',
          light: '#1a1a4a',
          glow: '0 0 15px rgba(0, 255, 255, 0.1)'
        }
      },
      backdropBlur: {
        space: '8px',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'font': 'font-size',
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [],
};

