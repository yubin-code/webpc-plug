import { IApi } from '@webpc/core/types'
import Webpack from './Webpack'

interface webpackApi extends IApi {
  onDev:(fun:Function)=>void;
  addServerMiddleware:(arr:Function[])=>void;
}

export default (api: webpackApi) => {
  api.onDev(async () => {
    // webpack 启动之前可以设置配置
    const config = await api.applyPlugins({
      key: 'getWebpackConfig',
      type: api.ApplyPluginsType.add,
      initialValue: [],
    })

    const webpack = new Webpack({
      config,
      isDev: api.env === "development",
      userConfig: api.userConfig,
      cwd: api.cwd,
      configName: api.configName || '',
      done: (data) => {
        api.applyPlugins({
          key: 'afterComplete',
          type: api.ApplyPluginsType.modify,
          initialValue: data,
        })
      }
    })
    // 运行服务
    webpack.runServe()
  })
}
