import { IApi } from '@webpc/core/types'

interface Dev extends IApi{
  addServerMiddleware: (fn: Function|Function[]) => void;
}

// 注册插件
export default (api: Dev) => {
  // 注册指令
  api.registerCommand({
    name: 'dev',
    description: 'start a dev server for development',
    fn: function () {
      api.applyPlugins({
        key: 'onDev',
        type: api.ApplyPluginsType.event,
      })
    }
  })
}
