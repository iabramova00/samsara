import eslintPluginPrettier from 'eslint-plugin-prettier'
import prettierConfig from './prettier.config.mjs'

export default [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: ['node_modules', 'dist', 'build', '.next'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': ['error', prettierConfig],
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
]
