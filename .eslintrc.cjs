module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'standard'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        indent: 0,
        quotes: ['error', 'single'],
        semi: ['warn', 'always'],
        'space-before-function-paren': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-sort-props': ['error'],
        'react/prop-types': 'off',
        'comma-dangle': 0,
    },
};
