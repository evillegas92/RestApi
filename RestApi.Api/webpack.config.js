const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
    entry: './Scripts/src/react/index.js',
    output: {
        filename: 'sep-react.js',
        path: path.resolve(__dirname, 'Scripts'),
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        })
    ]
};