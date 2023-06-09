/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/require-v-for-key': 0,
    'no-irregular-whitespace': 0,
    'vue/valid-v-for': 0,
    'vue/no-deprecated-slot-attribute': 0
  }
}
