/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f6f8ef',
          100: '#e7edd3',
          200: '#ced9a2',
          300: '#b2c16f',
          400: '#8ea03f',
          500: '#6e7d2b',
          600: '#566222',
          700: '#45501d',
          800: '#38411c',
          900: '#2f3618',
        },
        rust: {
          50: '#fff5ef',
          100: '#ffe4d2',
          200: '#ffc199',
          300: '#ff9a62',
          400: '#f97316',
          500: '#d85c0b',
          600: '#b44509',
          700: '#913809',
          800: '#752f0c',
          900: '#5f280d',
        },
      },
      boxShadow: {
        soft: '0 20px 60px rgba(47, 54, 24, 0.15)',
      },
      backgroundImage: {
        'grain': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};
