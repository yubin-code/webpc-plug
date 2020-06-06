import { IApi } from '@webpc/core/types'

// 注册方法
export default function (api: IApi) {
  [
    'afterComplete',         // webpack 编译后
    'buildComplete',         // webpack 打包完成以后
    
    // 指令部分
    'onDev',              // dev 指令被执行之后
    'onInit',             // 初始化被执行调用
    'onBuild',            // build的时候被执行
    'onHelp',             // help 的时候被执行

  ].forEach((name) => {
    api.registerMethod({ name })
  })

}

