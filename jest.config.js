module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  coverageDirectory: './coverage/',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}'
  ]
}
