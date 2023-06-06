/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'h-10',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f2fbf8',
          '100': '#d3f4e9',
          '200': '#a7e8d4',
          '300': '#72d6b9',
          '400': '#45bc9e',
          '500': '#2b9d82',
          '600': '#21806c',
          '700': '#1e6758',
          '800': '#1c5348',
          '900': '#1c453e',
          '950': '#0a2924',
        },
        'slate': {
          900: '#1D2939',
        },
        'red': {
          700: '#BE3455',
          // 700: '#bc2649',
        },
      },
    },
  },
  plugins: [],
}
