const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: `http://${process.env.VUE_APP_API_HOST}:3030`,
        changeOrigin: true
      },
    },
  },
});
