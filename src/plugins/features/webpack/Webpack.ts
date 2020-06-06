import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import portfinder from 'portfinder';
import lost from './tpl/404';
import merge from 'webpack-merge';
import getConfig from './GetConfig';
import _ from 'lodash';


export interface doneType{
  stats: webpack.Stats;
  host: string;
  port: number;
}
interface WebpackServiceType {
  config: webpack.Configuration[];
  isDev: boolean;
  userConfig: any;
  cwd: string;
  configName: string;              // 用户配置文件名字        
  done?: (data: doneType) => void; //编译完成执行 
}

// webpack 服务
class WebpackService {
  opts: WebpackServiceType;
  config: webpack.Configuration;         // 获取用户配置
  port: number;                          // 运行端口
  host: string;                          // 运行地址
  compiler!: webpack.Compiler;           // 保存webpack对象

  constructor(opts:WebpackServiceType){
    this.opts = opts
    this.config = {};
    this.port = 8000
    this.host = 'localhost'
    
    this.init(opts.config)
  }

  /**
   * 初始化配置文件
   * 一般是用没有配置文件或者入口文件不存在的时候调用
   */
  initConfig(cwd: string, configName:string){
    // 判断配置文件是否存在什么都不做直接让webpack监控配置文件
    if(fs.existsSync(path.join(cwd, configName))){
      return
    }

    // 如果连配置文件名字都没有设置直接抛出错误
    if(!configName){
      process.send?.("KILL")
      throw new Error("missing configuration!");
    }
    // 创建配置文件并且写入初始化配置
    fs.writeFileSync(
      configName,
      `module.exports = {
  webpack:{
    entry:{}
  }
}`)
  }

  // 初始化配置文件
  async init(config:webpack.Configuration[]) {
    /**
     * 合并对象
     * 因为配置对象可能被多次调用那么回调回来的就是多个所以需要循环
     */
    let userCof = {}
    config.forEach((v)=>{
      userCof = merge(userCof, v)
    })

    this.config = getConfig(userCof, this.opts.userConfig, this.opts.isDev, this.opts.cwd)
    
    // 没有入口配置直接杀死进程
    if(_.isEmpty(this.config.entry)){
      this.initConfig(this.opts.cwd, this.opts.configName)
      this.config.entry = { cof: `./${this.opts.configName}` }
    }
    
    this.compiler = webpack(this.config);
    // webpack 编译完成执行
    this.compiler.hooks.done.tap('complete', (stats: webpack.Stats) => {
      if(_.isFunction(this.opts.done)){
        this.opts.done({
          stats,
          host: this.host,
          port: this.port,
        })
      }
    })
  }

  // 运行服务
  async runServe(){
    // 获取参数
    const devServerOptions = this.config.devServer;
    // 获取地址
    this.host = devServerOptions?.host || this.host
    // 获取端口
    this.port = await portfinder.getPortPromise({ port: devServerOptions?.port || this.port });

    // 创建服务
    const server:any = new WebpackDevServer(this.compiler, devServerOptions);
    // 启动服务
    server.listeningApp.listen(this.port, this.host, () => {
      server.createSocketServer();
      if (typeof server.options.onListening === 'function') {
        server.options.onListening(server);
      }
    })

    server.app.all("*",(req:any, res:any, next:any) => {
        res.send(lost());
        next()
    })
  }
  
  // 运行webpack 并且返回 compiler 对象
  // 此时webpack还没有执行run所有没有运行
  run(){
    const compiler = this.compiler
    compiler.run(() => {})
  }

}

export default WebpackService