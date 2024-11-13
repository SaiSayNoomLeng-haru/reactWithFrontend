/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'main' : ['Bai Jamjuree', 'sans-serif']
      },
      colors: {
        'strong-cyan' : 'hsl(171, 66%, 44%)',
        'light-blue' : 'hsl(233, 100%, 69%)',
      },
      boxShadow: {
        'custom-cyan' : '0 5px 0 green',
        'custom-blue' : '0 5px 0 blue'
      },
      fontWeight: {
        'bold' : '700',
      }
    },
    screens: {
      'sm' : '25em',
      'md' : '35em',
      'lg' : '45em'
    },
    container: {
      center: true,
      padding: '1rem'
    }
  },
  plugins: [],
}

