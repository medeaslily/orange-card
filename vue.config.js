const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData : `
        @import "@/assets/style/variable.scss";
        @import "@/assets/style/mixin.scss";
        `,
      }
    }
  },
})
