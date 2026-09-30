/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        karina: {
          cream: '#FAF6F0',
          white: '#FFFFFF',
          border: '#E8DFD3',
          dark: '#1C1917',
          stone: '#78716C',
          amber: '#C8832B',
          'amber-light': '#E8A34A',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
