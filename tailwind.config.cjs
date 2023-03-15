/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        body: ['"メイリオ"', '"Hiragino Kaku Gothic ProN"', 'meiryo', '"Helvetica Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
