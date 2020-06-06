import webpack from 'webpack'
import path from 'path'
import Config from 'webpack-chain'
import merge from 'webpack-merge'
import _ from 'lodash';


// 导出webpack的配置
export default (userconfig: webpack.Configuration, cof:any, isDev: boolean, cwd: string):webpack.Configuration => {
  const config = new Config();
  // 设置入口
  const contentBase = path.resolve(cwd, (cof.viewPath || './src/view'))
  
  // 设定条件设置值
  // 设置map不然浏览器终端有警告提示
  config.when(isDev,
    config => config.devtool('inline-source-map')
  )
  
  // friendly-errors-webpack-plugin 插件可以让webpack 不显示那么多没有用多信息
  config.plugin('friendly-error')
    .use(require.resolve('friendly-errors-webpack-plugin'), [ { clearConsole: false } ])
  
  config.stats("errors-only")
  // webpackbar 插件可以显示webpack 编译的时候的进度条
  config.plugin('progress').use(require.resolve('webpackbar'))
  
  // 提供 mode 配置选项，告知 webpack 使用相应模式的内置优化。
  config.mode(isDev? "development" : "production")
    
  // 服务器设置
  config.devServer
    .quiet(true)                // 不再终端显示多余的编译信息
    .clientLogLevel("none")     // 禁止浏览器控制台socket的log输出
    .stats(false)               // 不显示统计信息
    .writeToDisk(false)         // 不写入硬盘直接写入内存
    .contentBase(contentBase)   // 内容入口
  
  // node shims
  config.node.merge({
    setImmediate: false,
    module: 'empty',
    dns: 'mock',
    http2: 'empty',
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  });

  return merge(config.toConfig(), userconfig)
}