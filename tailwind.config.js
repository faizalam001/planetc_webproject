/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
    "./src/*.{html,js,php}",
    "./src/assests/*.{html,js,php}",
    "./src/assests/software_pages/*.{html,js,php}",
    "node_modules/preline/dist/*.js",
    "./node_modules/flowbite/**/*.js",



    
],
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite',        
      },
      keyframes: {
        'loop-scroll': {
          from: {
            transform: 'translateX(0)',
            
          },
          to: {
            transform: 'translateX(-100%)',

          },

        },
      },
      
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('preline/plugin'),
    require('flowbite/plugin')


  ],
}

