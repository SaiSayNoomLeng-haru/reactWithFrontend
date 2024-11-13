/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray' : 'hsl(0, 0%, 55%)',
        'very-dark-gray' : 'hsl(0, 0%, 41%)'
      },
      fontSize: {
        'custom-base' : '15px',
      },
      fontFamily: {
        'body' :  ["Alata", 'sans-serif'],
        'header' : ["Josefin Sans", 'sans-serif']
      }
    },
    container : {
      center : true,
      padding : {
        DEFAULT : '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem'
      }
    },
    screens: {
      'sm' : '25em',
      'md' : '35em',
      'lg' : '45em'
    }
  },
  plugins: [],
}

