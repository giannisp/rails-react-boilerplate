/**
 * @fileOverview Webpack configuration file for production.
 */

'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

let config = require('./webpack.config.base');

config.output.filename = 'js/app.[chunkhash:8].js';

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production'),
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'app.vendor',
    filename: 'js/app.vendor.[chunkhash:8].js',
    minChunks: module => /node_modules/.test(module.resource),
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    sourceMap: true,
  }),
  new ExtractTextPlugin('css/app.[chunkhash:8].css'),
  new StyleLintPlugin({
    syntax: 'scss',
    failOnError: true,
  }),
  new ManifestPlugin({
    fileName: 'manifest.json',
  }),
];

module.exports = config;
