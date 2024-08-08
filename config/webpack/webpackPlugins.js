const path = require('path');
const { ProgressPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (IS_DEV, IS_ANALYZER, IS_SERVE, public, output) => {
  const template = path.resolve(public, 'index.html');
  const favicon = path.resolve(public, 'favicon.ico');
  const locales = path.resolve(public, 'locales');
  const localesBuild = path.resolve(output, 'locales');

  const progressLog = (p, m, ...args) => {
    const percent = `\u001b[33m${p * 100}%\u001b[0m`;
    const arg = `\u001b[32m${args}`;
    return console.info(percent, m, arg)
  };

  const plugins = [
    new HtmlWebpackPlugin({template, favicon}),
  ];

  if (IS_SERVE) {
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  if (IS_DEV) {
    plugins.push(new ForkTsCheckerWebpackPlugin());
  }

  if (!IS_DEV) {
    plugins.push(new ProgressPlugin(progressLog));
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }));
    plugins.push(new CopyPlugin({
      patterns: [
        { from: locales, to: localesBuild},
      ],
    }));
  };

  if (IS_ANALYZER) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}
