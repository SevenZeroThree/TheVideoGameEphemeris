var path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
    entry: {
        ME3: './src/scripts/mass-effect-3/index.js'
    },
    output: {
      path: path.resolve('docs'),
      filename: '[name].js'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            }
          ]
    },
    plugins: [htmlPlugin]
};