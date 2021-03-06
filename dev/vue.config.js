const path = require('path')
const Prod = process.env.NODE_ENV === 'production'
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: Prod ? '/chart/' : '/',
  outputDir: '../docs',
  devServer: {
    port: 8081
  },
  // css: {
  //   requireModuleExtension: true,
  //   extract: true,
  //   sourceMap: false,
  //   loaderOptions: {
  //     sass: {
  //       prependData: () => {
  //       }
  //     }
  //   }
  // },
  chainWebpack: config => {
    config.resolve.alias
      .set('@$', resolve('/src'))
      .set('view', resolve('/src/views'))
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '杨昕诺'
        return args
      })
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false
}
