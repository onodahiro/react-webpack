module.exports = (directory, PORT) => ({
  static: {
    directory: directory
  },
  open: true,
  port: PORT,
  historyApiFallback: true,
});
