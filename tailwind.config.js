/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Jaturat', 'sans-serif'],
        body: ['"Clear Sans"', 'sans-serif'],
      },
      colors: {
        yellow: {
          300: '#fafb63',
        },
        cyan: {
          300: '#87f4f0',
        },
        black: '#000000',
      },
    },
  },
  plugins: [],
}
