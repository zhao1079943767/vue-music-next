const registerRouter = require('./backend/router')

module.exports = {
  //关闭eslint
  lintOnSave: false,
  devServer: {
    before(app){
      registerRouter(app)
    },
    overlay: {
      warning: false,
      eerors: false
    }
  },
  css: {
    loaderOptions: {
      sass: {
        //全局引入sass 变量和mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  }
}
