module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/designer_manager": {
        target: "http://192.168.10.147:8031"
      }
    }
  }
};
