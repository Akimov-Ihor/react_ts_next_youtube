module.exports = {
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    plugins: ['react', '@typescript-eslint'],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    rules: {
        // 'linebreak-style': 'off',
        "import/prefer-default-export": 0,
        "import/no-default-export": "error",
        "no-multi-spaces": "error",
        "no-console": "warn",
        "camelcase": 0,
        "class-methods-use-this": 0,
        "react/no-array-index-key": 0,
        "react/prop-types": 0,
        "react/self-closing-comp": [
            "error",
            {
                "component": true,
                "html": false
            }
        ],
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/label-has-associated-control": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/label-has-for": 0,
        "arrow-body-style": 0,
        "react/jsx-props-no-spreading": 0,
        "max-len": ["error", { "code": 130 }]

    },
};
