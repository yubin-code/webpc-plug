import { IApi } from '@webpc/core/types'
export default (api: IApi) => {
  api.registerCommand({
    name: 'version',
    description: 'version',
    fn: () => {}
  })
}