const path = require('path');

const webpack = require('webpack');

module.exports = {
  entry : './src/App.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module:{
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV' : JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false
    }), //minify
    new webpack.optimize.AggressiveMergingPlugin() //Merging chunks
  ],
  //devtool: 'cheap-module-eval-source-map
}