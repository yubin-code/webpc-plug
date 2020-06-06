import { IApi } from '@webpc/core/types'
export default (api: IApi) => {
  api.registerCommand({
    name: 'help',
    description: 'show command helps',
    fn(){
      api.applyPlugins({
        key: 'onHelp',
        type: api.ApplyPluginsType.event,
      })
    }
  })
}