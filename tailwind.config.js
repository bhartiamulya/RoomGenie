/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#e8dcc9',
          300: '#d9c5a3',
          400: '#c9ad7d',
          500: '#b89560',
          600: '#a37d4d',
          700: '#886641',
          800: '#6f5438',
          900: '#5c4530',
        },
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #f5f0e8 0%, #e8dcc9 100%)',
        'gradient-dark': 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
      },
    },
  },
  plugins: [],
}
