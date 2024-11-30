/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'meals-appear': {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'cart-appear': {
          '0%': { opacity: '0', transform: 'translatey(-3rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'cart-close': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-3rem)' },
        },
        'cart-bump': {
          '0%':{transform: 'scale(0.9)'},
          '30%':{transform: 'scale(1.1)'},
          '50%':{transform: 'scale(1.15)'},
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        'meals-appear': 'meals-appear 0.5s ease-out forwards',
        'cart-appear':  'cart-appear 0.5s ease-out forwards',
        'cart-close': 'cart-close 0.5s ease-in-out forwards',
        'cart-bump': 'cart-bump 300ms ease-out forwards',
      },
    },
  },
  plugins: [],
}
  
