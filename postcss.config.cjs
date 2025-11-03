module.exports = {
  // Use explicit requires so PostCSS resolves the adapter correctly across environments.
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
}
