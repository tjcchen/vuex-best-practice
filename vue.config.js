module.exports = {
  publicPath: './',
  css: {
    extract: false
  },
  chainWebpack: config => {
    config.plugin('html')
          .tap(args => {
            args[0].template = './main/public/index.html';
            return args;
          });
  }
};