/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './script/main.js',
    './style/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        '001': '#1E6F9F',
        '002': '#4EA8DE',
        '003': '#5E60CE',
        '004': '#8284FA',
        '005': '#0D0D0D',
        '006': '#1A1A1A',
        '007': '#262626',
        '008': '#333333',
        '009': '#808080',
        '010': '#D9D9D9',
        '011': '#F2F2F2',
        '012': '#E25858',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'font-s': '12px',
        'font-m': '14px',
        'font-l': '16px',
      },
    },
  },
  plugins: [],
};
