/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'font-main' : ['Bai Jamjuree', 'sans-serif']
      },
      colors: {
        'strong-cyan' : 'hsl(171, 66%, 44%)',
        'light-blue' : 'hsl(233, 100%, 69%)',
      },
    },
    fontWeight: {
      'bold' : '600'
    },
    screens: {
      'sm' : '25em',
      'md' : '35em',
      'lg' : '45em'
    }
  },
  plugins: [],
}

