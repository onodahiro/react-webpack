const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (IS_DEV) => ({
  rules: [
    {
      test: /\.s[ac]ss$/i,
      use: [
        IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: IS_DEV ? '[path][name]__[local]' : '[hash:base64:8]',
            },
          },
        },
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