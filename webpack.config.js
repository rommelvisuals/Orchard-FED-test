const path = require('path'); // Import the 'path' module from Node.js

module.exports = {
    entry: './js/script.js', // Entry point for bundling, starting with 'script.js'
    mode: 'development', // Set the mode to development for better debugging
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
        filename: 'bundle.js', // Name of the bundled JavaScript file
    },
    module: {
        rules: [{
            test: /\.css$/i, // Test to match CSS files
            use: ["style-loader", "css-loader"], // Use style-loader and css-loader for CSS files
        }, ],
    },
};