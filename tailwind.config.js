/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'body-pattern': "url('/img/pattern.png')"
      }),
      colors: {
        'light-blue': '#37bcf9',
        'dark-blue': '#0370b9',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'from-bellow': 'fromBellow 500ms linear',
        'from-right': 'fromRight 400ms linear',
        
      },
      keyframes: {
        fromBellow:{
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(200%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        fromRight:{
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
