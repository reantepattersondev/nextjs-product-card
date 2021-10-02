module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
      "400p": "400px",
      "600p": "600px",
      "30p": "30px",
      "17p": "17px",
      "25p": "25px"
    },
    width: {
      "200p": "230px",
      "30p": "30px",
      "17p": "17px",
      "25p": "25px"
    },
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      '250p': '250px'
    },
    fontSize: {
      "ns": "13px",
      "nm": "14px",
      "nl": "30px",
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
      'darkpink': '#5E3945',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
