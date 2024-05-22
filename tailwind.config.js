const imageUrl = new URL('./src/assets/cat-hero.webp', import.meta.url).href

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: `url(${imageUrl})`,
      },
    },
  },
  plugins: [],
}
