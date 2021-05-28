import Vue from 'vue'
import store from '../store/index'
import { s8, createDiv, rectangle } from '@topology/core'

// 通过extend创建出来的组件示例上没有$store,所以将store挂载到vue上
Vue.prototype.$store = store

let { vueNodesData } = store.state
// console.log('vueNodesData',vueNodesData)

const vueNodes = (VueComponent) => (ctx, node) => {
  // 绘制一个底图，类似于占位符。
  rectangle(ctx, node)

  // 如果未知组件，直接返回
  if (!VueComponent) {
    return
  }

  if (!node.elementId) {
    node.elementId = s8()
  }

  // 节点的elementLoaded用于判断第三方图形库是否第一次加载，是否需要初始化
  // 这是一个辅助变量，用户自己赋值使用或不用
  if (!node.elementLoaded) {
    // 创建一个div容器
    vueNodesData[node.id] = {
      div: createDiv(node)
    }
    const wrapperDiv = document.createElement('div')
    wrapperDiv.class = 'wrapper-div'
    vueNodesData[node.id].div.appendChild(wrapperDiv)
    node.elementLoaded = true
    document.body.appendChild(vueNodesData[node.id].div)

    // 添加当前节点到div层，否则无法显示
    node.addToDiv()

    let Component = Vue.extend(VueComponent)
    vueNodesData[node.id].component = new Component({
      el: vueNodesData[node.id].div.children[0],
      beforeMount() {
        this.vData = node.vData
      },
    })

    node.elementRendered = false
  }
  // 节点的elementRendered用于判断第三方图形库是否需要重绘
  // 绘画引擎需要重绘节点时，会把此属性设置为false
  if (!node.elementRendered) {
    // 初始化时，等待父div先渲染完成，避免初始图表控件太大。
    setTimeout(() => {
      // console.log('node', node)
      // 重绘完成，避免不必要的重复重绘
      node.elementRendered = true
    })
  }
}

export default vueNodes