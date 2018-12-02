module.exports = {
    entry: {
        ME3: './src/scripts/mass-effect-3/index.js'
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
    }
};