/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1400px',
      },
      borderRadius: {
        'xl': '0.875rem',
      },
    },
  },
  plugins: [],
};