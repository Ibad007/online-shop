/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {    screens: {
    'sm': '320px',
    // => @media (min-width: 640px) { ... }

    'md': '540px',
    // => @media (min-width: 768px) { ... }

    'lg': '700px',
    // => @media (min-width: 1024px) { ... }

    'xl': '840px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  colors: {
    'primary': '#F1F1F1',
    'text-color': '#76DFF5',
    'bg-footer': '#007991',
    'text-white':'#FFFFFF',
  },
  
  },
  plugins: [],
}

