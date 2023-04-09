module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommended" , "plugin:react/recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "react/prop-types": "off"
    },
    "parser": "@babel/eslint-parser",
    "overrides": [
        {
            "files": [
                "**/*.spec.js",
                "**/*.spec.jsx"
            ],
            "env": {
                "jest": true
            }
        }
    ]
};