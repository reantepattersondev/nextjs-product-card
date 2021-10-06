module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      height: {
        "600p": "600px",
        "420p": "420px",
        "400p": "400px",
        "250p": "250px",
        "48p": "48px",
        "40p": "40px",
        "30p": "30px",
        "25p": "25px",
        "17p": "17px",
      },
      width: {
        "250p": "250px",
        "230p": "230px",
        "200p": "200px",
        "30p": "30px",
        "25p": "25px",
        "17p": "17px",
      },
      minHeight: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "full": "100%",
        "25p": "25px",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "250p": "250px",
      },
      minWidth: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "full": "100%",
        "250p": "250px"
      },
      fontSize: {
        "ns": "13px",
        "nm": "14px",
        "nl": "30px",
        "xs": ".75rem",
        "sm": ".875rem",
        "tiny": ".875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      borderColor: theme => ({
        ...theme("colors"),
        DEFAULT: theme("colors.gray.300", "currentColor"),
        "darkpink": "#5E3945",
      }),
      backgroundColor: theme => ({
        ...theme("colors"),
        "pCardBtnHover": "#5C4135",
        "pCardBtnActive": "#C7AD9D",
      }),
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        '10p': '10px'
      }
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      '6p': '6px'
    }
  },
  variants: {
    extend: {
      transitionProperty: ["hover", "focus"],
      animation: ["hover", "focus"],
      borderRadius: ['hover', 'focus'],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
