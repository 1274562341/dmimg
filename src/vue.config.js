module.exports = {
    devServer: {
      proxy: {
        '/sjtx': {
          target: 'http://api.btstu.cn',
          changeOrigin: true
        },
      }
    }
  }