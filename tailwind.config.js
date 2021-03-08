const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './**/*.js',
      './**/*.ts',
      './**/*.jsx',
      './**/*.tsx',
      './**/*.md',
    ],
    options: {
      safelist: ['before:bg-weedmaps-hq', 'bg-weedmaps-hq', 'before:bg-ncsoft-hq', 'bg-ncsoft-hq'],
    },
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
        dev: '#101010',
        instagram: '#f56040',
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
      body: ['effra', 'sans-serif'],
      sans: ['effra', 'sans-serif'],
    }
  },
  variants: {
    extend: {
      scale: ['active'],
      borderColor: ['active'],
      fontWeight: ['hover'],
      backgroundSize: ['before'],
      backgroundPosition: ['before'],
      position: ['before'],
      inset: ['before'],
      opacity: ['before', 'hover'],
      borderRadius: ['before'],
      backgroundImage: ['before'],
      zIndex: ['before'],
    },
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
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
