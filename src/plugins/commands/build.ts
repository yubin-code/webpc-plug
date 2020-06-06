import { IApi } from '@webpc/core/types'
export default (api: IApi) => {
  api.registerCommand({
    name: 'build',
    description: 'build',
    fn(){
      api.applyPlugins({
        key: 'onBuild',
        type: api.ApplyPluginsType.event,
      })
    }
  })
}