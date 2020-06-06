import Service from '@webpc/core'
import { IServiceOpts } from '@webpc/core/types'

export interface BaseOpts extends IServiceOpts{
  presets?: string[];    // 子类给预设
}

class Base extends Service {
  constructor(opts: BaseOpts){
    super({
      ...opts,
      presets:[
        require.resolve('../plugins/registerMethod'),
        require.resolve('../plugins/preset-built-in'),
      ],
    })
    
    // 子类预设
    this.additive['presets'] = opts.presets || []
  }
}
export default Base