const tseslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const importPlugin = require('eslint-plugin-import');

module.exports = [
    {
        ignores: ['node_modules/', 'dist/', '.vite/']
    },
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                sourceType: 'module'
            }
        },
        plugins: {
            '@typescript-eslint': tseslint,
            import: importPlugin
        },
        rules: {
            // TypeScript
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',

            // Imports
            'import/order': [
                'warn',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index'
                    ],
                    'newlines-between': 'always'
                }
            ],

            // General
            'no-console': 'off'
        }
    }
];
