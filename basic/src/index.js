// 主应用入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { registerMicroApps, start, initGlobalState } from 'qiankun'
// 组件之间通信
import event from './utils/event'
// 引入 initGlobalState， 创建一个共享数据
const actions = initGlobalState({
  status: 'base'
})
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// 微信用1
let child1 = {
  name: 'reactApp', // apppName 需要和子系统wepack配置的library对应
  container: '#reactApp', // 显示子应用的容器
  entry: 'http://localhost:9999', // 加载微应用url地址
  activeRule: '/reactApp', // 触发路由
  props: { event } // 自定义属性
}
// 微信用2
let child2 = {
  event,
  name: 'reactApp2',
  container: '#reactApp2',
  entry: 'http://localhost:8888',
  activeRule: '/reactApp2',
  props: { event }
}
// 注册微引用
registerMicroApps([child1, child2])
// 启动
start()