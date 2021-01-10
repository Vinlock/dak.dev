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
      './views/**/*.js',
      './views/**/*.jsx',
      './views/**/*.ts',
      './views/**/*.tsx',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: theme => ({
        ...theme('height'),
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
  ],
}
