module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    semi: ['error', 'never'],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'import/prefer-default-export': 0,
    'no-unused-vars': 1,
    'react/require-default-props': 0,
    'react/react-in-jsx-scope': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 1,
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/jsx-props-no-spreading': 1,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 1,
    'no-underscore-dangle': 0,
    'max-len': ['error', {
      ignoreComments: true,
      code: 100,
    }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  globals: {
    __IS_DEV__: true,
  },
};
