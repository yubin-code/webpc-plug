import { IApi } from '@webpc/core/types'
import Webpack from './Webpack'

interface webpackBuildApi extends IApi {
  onBuild:(fun:Function)=>void;
}

export default (api: webpackBuildApi) => {
  api.onBuild(async() => {
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
      cwd:api.cwd,
      configName: api.configName || '', 
      done: (data) => {
        api.applyPlugins({
          key: 'buildComplete',
          type: api.ApplyPluginsType.modify,
          initialValue: data,
        })
      }
    })

    webpack.run()
  })
}