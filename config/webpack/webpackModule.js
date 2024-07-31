const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (IS_DEV) => ({
  rules: [
    {
      test: /\.s[ac]ss$/i,
      use: [
        IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
  ],
});