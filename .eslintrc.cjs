const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: ['vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    semi: ['error', 'never'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 要求组件名称总是多个单词
    'vue/multi-word-component-names': 0,
    quotes: [2, 'single'], // 单引号
    'no-var': 0, // 对var警告
    'no-trailing-spaces': "error",
    'prettier/prettier':'error',
    "comma-dangle": ["error", "never"],
    // 首选默认导出导入/首选默认导出
    'import/prefer-default-export': 0,
     // 禁用一元操作符 ++ 和 --
     'no-plusplus': 0,
     'no-undef':0,
     'import/no-unresolved':0
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {},
    },
  ],
})
