const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = (env) => {
  const isDev =  env.mode === 'development';
  const isServe =  env.WEBPACK_SERVE ?? false;
  const progressLog = (p, m, ...args) => {
    const percents = `\u001b[33m${p * 100}%\u001b[0m`;
    const arguments = `\u001b[32m${args}`;
    return console.info(percents, m, arguments)
  }

  return {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    mode: env.mode ?? 'development',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
      isServe ? false : new webpack.ProgressPlugin(progressLog)
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: isDev && 'inline-source-map',
    devServer: isDev ? {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      open: true,
      port: env.port ?? 8000,
    } : undefined,
  }
};