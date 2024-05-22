/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: `url('https://res.cloudinary.com/avior-projects/image/upload/v1716389234/cat-hero_wzamwe.webp')`,
      },
    },
  },
  plugins: [],
}
