// backend/eslint.config.js
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended, // Base recommended ESLint rules
  ...tseslint.configs.recommended, // Recommended TypeScript rules
  {
    // Custom rules or overrides can go here
    rules: {
      // e.g., '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  {
    // Ignore patterns
    ignores: ["node_modules/", "dist/", "prisma/generated/"],
  }
);
