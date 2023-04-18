module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript',
    'standard',
    'plugin:vue/recommended',
    'plugin:jest/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['html', 'vue'],
  rules: {
    /* eslint-disable quote-props */
    // "eol-last": ["error", "never"],
    'handle-callback-err': ['error', 'err'],
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'lines-between-class-members': ['error', 'never'],
    'multiline-ternary': ['off'],
    'no-async-promise-executor': ['off'],
    'no-console': ['off'],
    'no-extend-native': ['off'],
    'no-extra-semi': ['error'],
    'no-new': ['off'],
    'no-proto': ['off'],
    'no-return-assign': ['off'],
    'no-sequences': ['off'],
    'no-tabs': ['off'],
    'no-unreachable': ['off'],
    'no-useless-constructor': ['off'],
    'no-var': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': ['error', 'before'],
    'space-before-function-paren': ['error', 'never'],
    'switch-colon-spacing': ['error'],
    'vue/component-definition-name-casing': ['error', 'kebab-case'], // vue
    'vue/component-tags-order': ['error', { order: ['template', 'script', 'style'] }], // vue
    'vue/html-indent': ['error', 2], // vue
    'vue/html-self-closing': ['off'], // vue
    'vue/max-attributes-per-line': ['off'], // vue
    'vue/multi-word-component-names': ['off'], // vue
    'vue/mustache-interpolation-spacing': ['error', 'always'], // vue
    'vue/singleline-html-element-content-newline': ['off'] // vue
    /* eslint-enable quote-props */
  }
}
