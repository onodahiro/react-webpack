const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (IS_DEV) => {
  const cssLoader =  {
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
  };

  const babelLoader =  {
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    }
  };

  const imgLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const svgLoader = {
    test: /\.svg$/i,
    use: [
        {
            loader: '@svgr/webpack',
            options: {
                icon: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true,
                            }
                        }
                    ]
                }
            }
        }
    ],
  };

  return {
    rules: [
      cssLoader,
      babelLoader,
      imgLoader,
      svgLoader,
    ],
  };
};