/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['"./web/**/*.{html,js}"'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    upper: {

    },
    extend: {
      screens: {
        'fsm': '480px'
      },
      colors: {
        'custom-blue': '#3366FF',
        'hijau': '#14b8a6'
      },
      scale: {
        '135': {
          '--tw-scale-x': 1.35,
          '--tw-scale-y': 1.35,
          transform: 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));.'
        }
      }
    },
  },
  plugins: [],
}

