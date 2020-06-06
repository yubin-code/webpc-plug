import { IApi } from '@webpc/core/types'
interface PresetApi extends IApi {
  presets: string[];
}
export default function(api:PresetApi) {
  // 获取子类的预设
  return {
    plugins: [
      // 插件
      ...(api.presets || []),
      require.resolve('./features/webpack'),
      require.resolve('./features/webpack/build'),
      
      // 指令
      require.resolve('./commands/dev'),
      require.resolve('./commands/help'),
      require.resolve('./commands/init'),
      require.resolve('./commands/build'),
      require.resolve('./commands/version'),
    ]
  }
}