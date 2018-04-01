/**
 * @file Webpack configuration file for production.
 */

const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-bare-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const config = require('./webpack.config.base');

config.mode = 'production';

config.output.filename = 'js/app.[chunkhash:8].js';

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new UglifyJsPlugin({
    cache: true,
    parallel: true,
    sourceMap: true,
  }),
  new MiniCssExtractPlugin({
    filename: 'css/app.[chunkhash:8].css',
  }),
  new StyleLintPlugin({
    syntax: 'scss',
    failOnError: true,
  }),
  new ManifestPlugin({
    fileName: 'manifest.json',
  }),
];

config.optimization = {
  runtimeChunk: false,
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'app.vendor',
        filename: 'js/app.vendor.[chunkhash:8].js',
        chunks: 'all',
      },
    },
  },
};

module.exports = config;
