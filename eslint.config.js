const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const functionalPlugin = require('eslint-plugin-functional').default;
const importPlugin = require('eslint-plugin-import-x');
const inclusiveLanguagePlugin = require('eslint-plugin-inclusive-language');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  {
    ignores: ['dist/**'],
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      functional: functionalPlugin,
      import: importPlugin,
      'inclusive-language': inclusiveLanguagePlugin,
    },
    rules: {
      ...prettierConfig.rules,
      'import/order': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'functional/prefer-readonly-type': [
        'error',
        {
          ignoreClass: true,
        },
      ],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/prefer-readonly-parameter-types': [
        'error',
        {
          ignoreInferredTypes: true,
          checkParameterProperties: false,
          allow: [{ from: 'lib', name: ['HTMLElement', 'Document'] }],
        },
      ],
      'inclusive-language/use-inclusive-words': 'error',
    },
  },
];
