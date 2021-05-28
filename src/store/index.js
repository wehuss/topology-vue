import Vue from 'vue'
import Vuex from 'vuex'
import { getNodeIdList } from '@/util/util'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curNode: null,
    canvas: null,
    canvasData: null,
    vueNodesData: {}
  },
  getters: {
    vData: state => {
      // console.log('ssssss', state.curNode.vData)
      return (state.curNode && state.curNode.vData) || false
    },
    curAttrComponent: state => {
      if (!state.curNode) {
        return false
      }
      if (!state.vueNodesData[state.curNode.id]) {
        return false
      }
      if (!state.vueNodesData[state.curNode.id].component.AttrListComponent) {
        return false
      }
      return state.vueNodesData[state.curNode.id].component.AttrListComponent
    }
  },
  mutations: {
    setCurNode(state, node) {
      state.curNode = node
    },
    setCanvas(state, canvas) {
      state.canvas = canvas
    },
    setCanvasData(state, data) {
      state.canvasData = data
    },
    setVueNodesData(state, { key, value }) {
      state.vueNodesData[key] = value
    },
    setVData(state, { value, merge = true }) {
      const node = state.curNode
      const component = state.vueNodesData[node.id].component
      if (merge) {
        const vData = {
          ...node.vData,
          ...value
        }
        node.vData = vData
        component.vData = vData
      } else {
        node.vData = value
        component.vData = value
      }
    },
    deleteNodes(state, nodeList) {
      state.curNode = null
      getNodeIdList(nodeList).forEach(id => {
        state.vueNodesData[id] && delete state.vueNodesData[id]
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
