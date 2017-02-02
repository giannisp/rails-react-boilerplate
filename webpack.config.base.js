/**
 * @fileOverview Webpack basic configuration file.
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './app/assets/javascripts/app.boot.js',
  },
  output: {
    path: './public/dist/js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {configFile: './.eslintrc'},
          },
          {
            loader: 'babel-loader',
          }
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?sourceMap&minimize!sass-loader?sourceMap',
        }),
      }
    ],
  },
};
