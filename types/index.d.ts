import WebpackConfig from 'webpack-chain'
import webpack from 'webpack'
import { IApi, IServiceOpts } from '@webpc/core/types'
import Service, { BaseOpts } from '../lib/service/index'

interface FileType {
  action: string;
  fileName: string
}

interface Web {
  host: string
  port: number;
}
export interface Api extends IApi{
  // 钩子
  afterComplete:(fun:Function)=>void;             // 编译完成之后
  buildComplete:(fun:Function)=>void;             // 打包完成之后
  
  
  // 指令部分
  onDev:(fun:Function)=>void,                 // dev 指令被执行之后
  onInit:(fun:Function)=>void;                // 初始化被执行调用
  onBuild:(fun:Function)=>void,               // build的时候被执行
  onHelp:(fun:Function)=>void,                // help 的时候被执行
}

export {
  Service, IServiceOpts, BaseOpts, WebpackConfig
}