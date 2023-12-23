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
        blueDark: '#1E6F9F',
        blue: '#4EA8DE',
        purpleDark: '#5E60CE',
        purple: '#8284FA',
        gray700: '#0D0D0D',
        gray600: '#1A1A1A',
        gray500: '#262626',
        gray400: '#333333',
        gray300: '#808080',
        gray200: '#D9D9D9',
        gray100: '#F2F2F2',
        danger: '#E25858',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'font-s': '12px',
        'font-m': '14px',
        'font-l': '16px',
        'font-title': '40px',
      },
      width: {
        92: '92px',
        736: '736px',
        1440: '1440px',
      },
      height: {
        48: '48px',
        200: '200px',
      },
    },
  },
  plugins: [],
};
