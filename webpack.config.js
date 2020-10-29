const path = require("path");

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "mybuild"),
        filename: "mybundle.js"
    }
};

module.exports = config;