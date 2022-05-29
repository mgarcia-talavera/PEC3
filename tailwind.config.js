module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    spacing: {
      '1': '10px',
      '2': '12px',
      '3': '18px',
      '4': '20px',
      '5': '23px',
      '6': '30px',
      '7': '32px',
      '8': '50px',
      '9': '100px',
      '10': '10px',
      '11': '500px',
    },
    borderRadius: {
      'basic': '0.625rem',
    },
    colors: {
      'white': '#ffffff',
      'gray': '#d9e2ef',
      'orange': '#dba40b',
      'cyan-light': '#9aeaf0',
      'gold': '#dbb959',
      'cyan-acer': '#43a8b9',
      'brown': '#a15454',
    },
    screens: {
      'mqMinWidth': '420px',
      'Min': '812px',
      'Media': '912px',
      'Max': '1280px',
    },
    fontFamily: {
      sans: ['-apple-system','BlinkMacSystemFont',"Segoe UI",'Roboto',"Helvetica Neue",'Arial',"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol", 'sans-serif'],
      serif:["Georgia","Times New Roman",'serif'],
    },
    fontSize: {
      'basic': '15px',
      'mitja': '17.6px',
      'res': '21px',
      'gran': '24px',
      'res-m': '30px',
      'max': '39px',
    },

    extend: {
      lineHeight: {
        'mid':'25.6px',
        'extra': '50px',
      },
      width: {
        'p': '40px',
        'pm': '50px',
        'm':'140px',
      },
      height: {
        'p': '40px',
        'm': '80px',
      },
    },
  },
  plugins: [],
}
