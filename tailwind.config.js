const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './pages/**/*.js',
      './pages/**/*.jsx',
      './pages/**/*.ts',
      './pages/**/*.tsx',
      './components/**/*.js',
      './components/**/*.jsx',
      './components/**/*.ts',
      './components/**/*.tsx',
      './modules/**/*.js',
      './modules/**/*.jsx',
      './modules/**/*.ts',
      './modules/**/*.tsx',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        'ncsoft-hq': 'url(\'/images/ncsoft_corporate_location.jpg\')',
        'weedmaps-hq': 'url(\'/images/weedmaps_corporate_location.jpg\')',
      }),
      textColor: () => ({
        github: 'rgb(110, 84, 148)',
        twitter: 'rgb(29, 161, 242)',
        linkedin: 'rgb(0, 119, 181)',
      }),
      minHeight: () => ({
        panel: '880px',
        'mobile-panel': '75vh',
        'panel-thin': '400px',
        'sm-icon': '20px',
        'md-icon': '25px',
      }),
      height: () => ({
        panel: '880px',
        'mobile-panel': '75vh',
        'panel-thin': '400px',
        'sm-icon': '20px',
        'md-icon': '25px',
      }),
      width: () => ({
        'sm-icon': '20px',
        'md-icon': '25px',
      }),
    },
    fontFamily: {
      display: ['Sen', 'sans-serif'],
      body: ['foco', 'sans-serif'],
    }
  },
  variants: {
    extend: {
      scale: ['active'],
      borderColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(({ addVariant, e }) => {
      // before
      addVariant('before', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`before${separator}${className}`)}::before`
        })
      })

      // after
      addVariant('after', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}::after`
        })
      })
    }),
    plugin(({ addUtilities }) => {
      const contentUtilities = {
        '.content': {
          content: 'attr(data-content)',
        },
        '.content-before': {
          content: 'attr(data-before)',
        },
        '.content-after': {
          content: 'attr(data-after)',
        },
      }

      addUtilities(contentUtilities, ['before', 'after'])
    }),
  ],
}
