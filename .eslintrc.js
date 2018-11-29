module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "amd": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2016,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
          }
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "plugins": [
        "react"
    ]
};