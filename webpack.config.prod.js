/**
 * @file Webpack configuration file for production.
 */

const webpack = require('webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');
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
  minimize: true,
  minimizer: [
    new TerserWebpackPlugin({
      terserOptions: {
        compress: {
          comparisons: false,
          warnings: false,
        },
        mangle: {
          safari10: true,
        },
        output: {
          comments: false,
          ascii_only: true, // eslint-disable-line babel/camelcase
        },
      },
    }),
  ],
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
