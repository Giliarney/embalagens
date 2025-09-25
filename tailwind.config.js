/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        pf: {
          ink: '#202c3c',
          coal: '#1d1d1d',
          stone: '#4b4b4b',
          sun: '#fff7cc',
          emerald: '#047857',
        },
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,.08)',
        lift: '0 12px 30px rgba(0,0,0,.12)',
      },
      borderRadius: {
        xl2: '1rem',
      },
    },
  },
  plugins: [],
};
