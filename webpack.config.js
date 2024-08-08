const path = require('path');

module.exports = (env) => {
  const IS_DEV = env.mode === 'development';
  const IS_SERVE = env.WEBPACK_SERVE;
  const MODE = env.mode ?? 'development';
  const PORT = env.port ?? 8000;
  const ANALYZER = env.analyzer ?? false;

  const PATHS = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
  };

  return {
    entry: PATHS.entry,
    mode: MODE,
    output: {
      path: PATHS.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: require('./config/webpack/webpackPlugins')(IS_DEV, ANALYZER, IS_SERVE, PATHS.public, PATHS.output),
    module: require('./config/webpack/webpackModule')(IS_DEV),
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias : {
        '@': PATHS.src,
      },
    },
    devtool: IS_DEV && 'inline-source-map',
    devServer:
      IS_DEV ?
      require('./config/webpack/webpackDevServer')(PATHS.public, PORT) :
      undefined,
  };
};