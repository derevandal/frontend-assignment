module.exports = {
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true
  },
  plugins: ['jest', 'prettier'],
  extends: [
    'eslint:recommended',
    'airbnb',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:vue/recommended'
  ],
  rules: {
    semi: ['error', 'never'],
    'prettier/prettier': ['error']
  },
  settings: {
    'import/resolver': 'webpack'
  }
}
