// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        typography: {
          light: colors.gray[700],
          dark: colors.slate[300],
        },
        dark: {
          base: '#19202a',
          card: '#25303f',
          light: '#2a3647',
        },
      },
    },
  },
  plugins: [],
};
