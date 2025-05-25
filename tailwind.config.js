/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f7',
          100: '#ccefef',
          200: '#99dfdf',
          300: '#66cfcf',
          400: '#33bfbf',
          500: '#00afaf',
          600: '#008c8c',
          700: '#006969',
          800: '#004646',
          900: '#002323',
        },
        secondary: {
          50: '#fdf8ed',
          100: '#f9eccc',
          200: '#f3d999',
          300: '#edc666',
          400: '#e7b333',
          500: '#aa8345',
          600: '#8b6a37',
          700: '#6c5229',
          800: '#4d3a1c',
          900: '#2e230e',
        },
        dark: {
          100: '#1a1a1a',
          200: '#151515',
          300: '#111111',
          400: '#0d0d0d',
          500: '#080808',
          600: '#040404',
          700: '#020202',
          800: '#010101',
          900: '#000000',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'ray': 'ray 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ray: {
          '0%': { transform: 'rotate(0deg) scale(1)', opacity: 0.1 },
          '50%': { transform: 'rotate(180deg) scale(1.5)', opacity: 0.3 },
          '100%': { transform: 'rotate(360deg) scale(1)', opacity: 0.1 },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};