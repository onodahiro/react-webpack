const { ProgressPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (IS_DEV, template) => {
  const plugins = [new HtmlWebpackPlugin({template})];
  const progressLog = (p, m, ...args) => {
    const percent = `\u001b[33m${p * 100}%\u001b[0m`;
    const arg = `\u001b[32m${args}`;
    return console.info(percent, m, arg)
  };

  if (!IS_DEV) {
    plugins.push(new ProgressPlugin(progressLog))
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    }))
  };

  return plugins;
}
