module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    overrides: [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module",
        project: "./tsconfig.json"
    },
    plugins: [
        "react"
    ],
    "rules": {
    }
}
