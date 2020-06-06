import { IApi } from '@webpc/core/types'
export default (api: IApi) => {
  api.registerCommand({
    name: 'init',
    description: 'init Initialize project',
    fn: function (){
      api.applyPlugins({
        key: 'onInit',
        type: api.ApplyPluginsType.event,
      })
    }
  })
}