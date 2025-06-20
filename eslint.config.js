import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2024
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'curly': 'error',
      'eqeqeq': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-shadow': 'error',
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'space-before-blocks': 'error',
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-infix-ops': 'error',
      'arrow-spacing': ['error', { before: true, after: true }],
      'comma-dangle': ['error', 'never'],
      'no-var': 'error',
      'prefer-const': 'error',
      'object-shorthand': 'error',
      'no-duplicate-imports': 'error',
      'no-useless-constructor': 'error',
      'no-class-assign': 'error',
      'no-this-before-super': 'error',
      'constructor-super': 'error',
      'no-cond-assign': ['error', 'always'],
      'no-constant-condition': 'error',
      'no-control-regex': 'error',
      'no-dupe-args': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty-character-class': 'error',
      'no-ex-assign': 'error',
      'no-extra-boolean-cast': 'error',
      'no-func-assign': 'error',
      'no-inner-declarations': ['error', 'functions'],
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-unreachable': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error'
    }
  }
];
