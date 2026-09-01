/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        jimaco: {
          dark: '#0B1E02',
          primary: '#1C6521',
          primaryDark: '#134716',
          accent: '#7BBE6F',
          orange: '#FF6A1C',
          orangeHover: '#e55a10',
          sand: '#F1EBE1',
          grayText: '#63716A',
          bgLight: '#FBFBFB'
        }
      },
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
        display: ['"Barlow Semi Condensed"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
