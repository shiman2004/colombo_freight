/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111F',
        surface: '#0B1626',
        brand: '#146EF5',
        teal: '#29B6A6',
        paper: '#F7F9FC'
      },
      boxShadow: {
        soft: '0 18px 60px rgba(2,12,27,.10)'
      },
      maxWidth: {
        content: '1280px'
      }
    }
  },
  plugins: []
}
