const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        ME3: './scripts/mass-effect-3'
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                },
                resolve: {
                    extensions: ['.js', '.jsx'],
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
        ]
    }
};