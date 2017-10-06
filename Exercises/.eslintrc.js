module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true,
        "node": true
    },
    "extends": "airbnb",
    "rules": {
         "no-console":["error", { allow: ["log","warn", "error"] }]
    },
    "plugins" : ["html"]
};