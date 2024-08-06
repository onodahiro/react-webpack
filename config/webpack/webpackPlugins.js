const { ProgressPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (IS_DEV, template, IS_ANALYZER) => {
  const plugins = [new HtmlWebpackPlugin({template})];
  const progressLog = (p, m, ...args) => {
    const percent = `\u001b[33m${p * 100}%\u001b[0m`;
    const arg = `\u001b[32m${args}`;
    return console.info(percent, m, arg)
  };

  if (!IS_DEV) {
    plugins.push(new ProgressPlugin(progressLog));
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }));
  };

  if (IS_ANALYZER) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}
