const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      f: (value) => ({
        fontSize: value,
      }),
      'f-px': (value) => ({
        fontSize: parseInt(value) / 16 + 'px',
      }),
    },
    { values: theme('spacing') }
  )
})
