/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#8E7CC3',
        'brand-pink': '#F4C2C2',
        'brand-gold': '#D4AF37',
        'brand-cream': '#FFFAF4',
        'brand-wood': '#F4E6D4',
        'brand-dark': '#332844',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'woodgrain': 'linear-gradient(to bottom right, #f4e6d4, #e8d5bc)',
      }
    },
  },
  plugins: [],
}
