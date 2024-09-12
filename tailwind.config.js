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
        'tab3': {'max': '800px'},
        'mob': {'max': '600px'},
        'mob2': {'max': '400px'},
        'mob3': {'max': '463px'},
        'desk': {'min': '900px'}
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
        ],
        'btnShadow1': [
          'inset 0px -3px 0px 0px #545454',
          'inset 0px -4px 0px 0px #545454'
        ],
        'btnShadow2': [
          'inset 0px -3px 0px 0px #E84C00',
          'inset 0px -4px 0px 0px #FF5300',
        ],
      },
      dropShadow: {
        'btnDrop': [
            '0 0 14 0 #ff530099',
            '0 0 0 1 #00000040'
        ],
        'btnDrop2': [
          '0px 5px 8px 0px #ff8c5440',
          '0px 0px 0px 0px #B53B00'
        ]
      },
      gridTemplateColumns: {
        'customGrid': 'repeat(auto-fit, minmax(200px, 1fr))',
        'customGrid2': 'repeat(auto-fit, minmax(250px, 1fr))',
        'customGrid3': 'repeat(auto-fit, minmax(150px, 1fr))',
      },
    }
  },
  plugins: [],
}