const purple700 = '#38364e'
const purple500 = '#6562BF'
const purple100 = '#F8F7FD'

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: {
        'purple-500': purple500,
      },
      maxHeight: {
        '2x-screen': '200vh',
      },
      textColor: {
        'gray-600': '#4D4D4D',
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
    },
    backgroundColor: {
      'gray-700': '#333333',
      'purple-700': purple700,
      'purple-500': purple500,
      'purple-100': purple100,
      white: '#ffffff',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.25), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    container: {
      center: true,
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.1em',
      widest: '.25em',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // @ts-ignore
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
