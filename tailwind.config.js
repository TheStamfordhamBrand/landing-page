/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tab': {'max': '900px'},
        'tab2': {'max': '1110px'},
        'mob': {'max': '600px'},
        'mob2': {'max': '400px'},
        'mob3': {'max': '463px'},
        'desk': {'min': '900px'}
      }
    },
    fontFamily: {
      'monte': ['Montserrat', 'sans-serif'],
      'nauticaBold': ['nauticaBold'],
      'helveticaBlack': ['helveticaBlack  '],
    },
    colors: {
      'primary': '#FF5300',
      'textCol': '#FFFEFE',
      'offWhite': '#FFF9F3'
    },
    boxShadow: {
      'navShadow': '0px -1px 1px 0 #FF5300',
      'innerShadow': [
        'inset 0px 1px 1px 0 #FF5300',
       'inset 0px -1px 1px 0 #00000033'
      ]
    },
    dropShadow: {
      'btnDrop': [
          '0 0 14 0 #ff530099',
          '0 0 0 1 #00000040'
      ]
    }
  },
  plugins: [],
}