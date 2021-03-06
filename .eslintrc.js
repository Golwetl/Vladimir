module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },

    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            globalReturn: true,
        },
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'css-modules',
        'import',
        'jsx-a11y',
        'monorepo',
        'react-hooks',
        'simple-import-sort',
        'testing-library',

        // should stay at the end
        'prettier',
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:css-modules/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:monorepo/recommended',
        'plugin:react-hooks/recommended',
        // "stylelint",

        'plugin:prettier/recommended',
        // "prettier"
    ],
    ignorePatterns: ['build', '*.config.js', '**/node_modules', '**/dist', '**/examples'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        react: {
            version: 'detect',
        },
    },
    rules: {
        // Single quotes preferred
        quotes: [2, 'single', { avoidEscape: true }],

        // definition not found
        // 'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],

        // Allow TS infer types without explicitly specifying them
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // Prevents self import of foo.js from foo.js
        'import/no-self-import': 'error',
        'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
        'import/prefer-default-export': 'off',
        // Prevents conflicts with simple-import-sort
        'sort-imports': 'off',
        'import/order': 'off',

        // Allows not to destruct your props
        'react/destructuring-assignment': 'off',
        // Allows to spread props into your JSX: <div {...props} />
        'react/jsx-props-no-spreading': 'off',
        // Disable prop types (we are using TS)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        'react/prop-types': 'off',

        // Imports should be on top of the file
        'import/first': 'error',
        // Splits imports from the rest of the code with new line
        'import/newline-after-import': 'error',
        // Prevents import duplicates
        'import/no-duplicates': 'error',

        // TODO: Add monorepo rules later

        /*** IDE fixes ***/
        // Ignore unused variables that starts with `_`, for example `.map((_el, idx) => idx))`
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [2, { args: 'all', argsIgnorePattern: '^_' }],
        'no-undef': 'off',

        '@typescript-eslint/ban-types': 'off',

        // Fixes the bug of enums to be suspected shadowing itself
        // https://stackoverflow.com/a/65768375/4239577
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],

        // Starting from React 17.0, React import is not required
        'react/react-in-jsx-scope': 'off',

        // Allows to extract expect sentences into shared functions
        'jest/expect-expect': 'off',

        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
            'warn',
            { functions: false, classes: false, variables: false, typedefs: false },
        ],

        // Allows to sort and separate some of the imports into groups
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Node.js builtins. You could also generate this regex if you use a `.js` config.
                    // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
                    [
                        '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
                    ],
                    // Packages. `react` related packages come first.
                    ['^react$', '^lodash', '^clsx', '^react'],

                    // TODO: When used in the inside of a scope, add ['^@scope'],

                    // Side effect imports.
                    ['^\\u0000'],
                    // Parent imports. Put `..` last.
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    // Other relative imports. Put same-folder imports and `.` last.
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                    // Style imports.
                    ['^.+\\.s?css'],
                ],
            },
        ],
    },
}
