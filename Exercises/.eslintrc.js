module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
         "no-console":["error", { allow: ["log","warn", "error"] }]
    }
};