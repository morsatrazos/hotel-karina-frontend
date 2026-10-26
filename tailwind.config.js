/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{html,js}',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        karina: {
          cream: '#FFF6EA',
          charcoal: '#343434',
          'charcoal-dark': '#242424',
          mustard: '#F0A800',
          'mustard-light': '#FFD573',
          blue: '#2680BD',
          'blue-light': '#92CEF7',
          terracotta: '#C7473B',
          coral: '#EB8C84',
          white: '#FFFFFF',
          border: '#E8DFD3',
          dark: '#1C1917',
          stone: '#78716C',
          amber: '#C8832B',
          'amber-light': '#E8A34A',
        },
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
