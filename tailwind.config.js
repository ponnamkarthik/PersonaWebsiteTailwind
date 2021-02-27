module.exports = {
  purge: {
    content: [
      './**/*.html',
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FFF0EA',
          medium: '#FFD8C9',
          dark: '#C40007',
        },
        dark: {
          brand: {
            DEFAULT: '#00adb5',
            medium: '#00adb5',
            dark: '#00adb5',
            bg: '#303841',
            bglight: '#3a4750',
            barlight: '#eeeeee'
          }
        }
      },
      margin: {
        'p-10': '10%',
        'p-20': '20%',
        'p-30': '30%',
        'p-40': '40%',
        'p-50': '50%',
        'p-60': '60%',
        'p-70': '70%',
        'p-80': '80%',
        'p-90': '90%',
        'p-100': '100%',
      },
      width: {
        'p-10': '10%',
        'p-20': '20%',
        'p-30': '30%',
        'p-40': '40%',
        'p-50': '50%',
        'p-60': '60%',
        'p-70': '70%',
        'p-80': '80%',
        'p-90': '90%',
        'p-100': '100%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
