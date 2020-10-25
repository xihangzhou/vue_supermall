module.exports = {
    configureWebpack: {
      resolve: {
        alias: {//别名的意思
          'assets': '@/assets',//@已经被配置过了
          'common': '@/common',
          'components': '@/components',
          'network': '@/network',
          'views': '@/views',
        }
      }
    }
  }
  
  