<template>
  <div class="index">
    <el-row>
      <el-col :span="3">
        <left-area @onDrag="onDrag" />
      </el-col>
      <el-col :span="18">
        <div id="topology-canvas"></div>
      </el-col>
      <el-col :span="3">
        <right-area />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Topology } from '@topology/core'
import canvasRegister from './canvasRegister'
import LeftArea from './left-area.vue'
import RightArea from './right-area'
import { getNodeIdList } from '@/util/util'

export default {
  data() {
    return {
      curNode: null
    }
  },
  components: {
    LeftArea,
    RightArea
  },
  created() {
    canvasRegister()
  },
  mounted() {
    const canvas = new Topology('topology-canvas', {
      rotateCursor: '/rotate.cur',
      locked: 2,
      grid: true,
      ruleColor: '#2db7f5',
      hideInput: true,
      on: this.topologyCanvasEvent
    })
    this.$store.commit('setCanvas', canvas)
  },
  methods: {
    onDrag(event, node) {
      event.dataTransfer.setData('Topology', JSON.stringify(node.data))
    },
    topologyCanvasEvent(event, data) {
      // console.log('event', event, data)
      switch (event) {
        case 'node':
          // case 'addNode':
          this.$store.commit('setLine', null)
          this.$store.commit('setCurNode', data)
          break
        case 'addLine':
        case 'line':
          this.$store.commit('setCurNode', null)
          this.$store.commit('setLine', data)
          break
        case 'moveInNode':
          break
        case 'moveOutNode':
          break
        case 'space':
          this.$store.commit('setCurNode', null)
          this.$store.commit('setLine', null)
          break
        case 'resizePens':
          this.handleResizePens(data)
          break
        case 'scale':
          this.handleNodeResize()
          break
        case 'delete':
          this.$store.commit('deleteNodes', data)
          break
      }
    },
    handleResizePens(data) {
      this.handleNodeResize(getNodeIdList(data))
    },
    handleNodeResize(nodeIdList = false) {
      const { vueNodesData } = this.$store.state
      if (vueNodesData.length === 0) return
      // 不传nodeIdList就是scale事件
      if (!nodeIdList) {
        Object.values(vueNodesData).forEach(({ component }) => {
          component.handleResize && component.handleResize()
        })
      } else {
        nodeIdList.forEach(id => {
          if (vueNodesData[id]) {
            const component = vueNodesData[id]
            component.handleResize && component.handleResize()
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100vh;
}
#topology-canvas {
  height: 100vh;
  position: relative;
}
</style>