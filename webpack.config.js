/**
 * @fileOverview Webpack configuration file for development.
 */

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

let config = require('./webpack.config.base');

config.output.filename = 'app.js';

config.plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'app.vendor.js',
    minChunks: module => /node_modules/.test(module.resource),
  }),
  new ExtractTextPlugin('../css/app.css'),
  new StyleLintPlugin({
    syntax: 'scss',
    failOnError: true,
  }),
];

module.exports = config;
