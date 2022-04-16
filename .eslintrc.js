module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  extends: ['airbnb', 'airbnb-typescript', 'eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
