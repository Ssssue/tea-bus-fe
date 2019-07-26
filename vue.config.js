module.exports = {
  lintOnSave: 'error',
  productionSourceMap: false,
  devServer: {
    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://localhost:3001/api',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  },
};
