/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: '#6366F1',
          pink: '#EC4899',
          teal: '#14B8A6',
          purple: '#8B5CF6',
          blue: '#3B82F6',
          amber: '#F59E0B',
          border: '#DEE2E6',
          panel: '#FFFFFF',
          bg: '#F8F9FC'
        }
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(16,24,40,.06)'
      }
    }
  },
  plugins: []
}
