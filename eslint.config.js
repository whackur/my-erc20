// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: [
      'node_modules',
      'coverage',
      'dist',
      'cache',
      'artifacts',
      'types',
      'ignition/deployments',
      'bundle',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  prettierConfig,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      '@typescript-eslint/object-curly-spacing': 'off',
      'object-curly-spacing': ['error', 'never'],
    },
  },
);
