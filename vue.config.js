const port = process.env.port || process.env.npm_config_port || 9090; // 打开时的端口

module.exports = {
  publicPath: "./", // 访问路径，相对路径不然容易出现白屏
  devServer: {
    open: true, // 启动后是否需要自动打开浏览器
    disableHostCheck: true,
    port: port, // 启用后的端口
  },
  css: {
    // 不用在每一个页面都进行引入样式，就能直接引用。
    loaderOptions: {
      // sass-loader
      sass: {
        prependData: `@import '@/styles/variables.scss';`,
      },
    },
    sourceMap: true,
  },
};
