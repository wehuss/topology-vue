<template>
  <div class="left-area">
    <el-row :gutter="12">
      <el-col :span="12">
        <el-button type="primary" @click="exportCanvasData"
          >导出画布数据</el-button
        >
      </el-col>
      <el-col :span="12">
        <el-button type="success" @click="importCanvasData"
          >导入画布数据</el-button
        >
      </el-col>
      <el-col :span="12">
        <el-button type="warning" @click="consoleLog">打印store</el-button>
      </el-col>
    </el-row>
    <el-collapse v-model="activeNames">
      <el-collapse-item
        v-for="group in tools"
        :key="group.ley"
        :name="group.key"
        :title="group.name"
      >
        <el-row>
          <el-col v-for="item in group.children" :key="item.key" :span="8">
            <div
              class="topology-node"
              draggable
              @dragstart="onDrag($event, item)"
            >
              <i class="node-icon el-icon-eleme"></i>
              <el-tooltip effect="dark" :content="item.name">
                <div class="node-name">
                  {{ item.name }}
                </div>
              </el-tooltip>
            </div>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import tools from './tools'
import { deepCopy } from '@/util/util'
import { mapState } from 'vuex'

export default {
  name: 'left-area',
  data() {
    return {
      tools: deepCopy(tools),
      activeNames: tools[0].key
    }
  },
  computed: {
    ...mapState(['canvas', 'canvasData'])
  },
  created() {
    setTimeout(() => {
      if (window.registerTools) {
        window.registerTools()
        const children = window.topologyTools.map(item => ({
          name: item.name,
          key: item.fullname,
          data: item.data
        }))
        this.$set(this.tools, this.tools.length, {
          key: 'system',
          name: '系统组件',
          children
        })
      }
    })
  },
  methods: {
    onDrag(event, node) {
      this.$emit('onDrag', event, node)
    },
    exportCanvasData() {
      try {
        this.$store.commit('setCanvasData', this.canvas.pureData())
      } catch (error) {
        this.$message.error('导出失败')
      }
    },
    importCanvasData() {
      this.canvas.open(this.canvasData)
    },
    consoleLog() {
      console.log('store', this.$store)
    }
  }
}
</script>

<style lang="scss" scoped>
.left-area {
  padding: 16px;
  border-right: 1px solid #ebeef5;
  height: calc(100vh - 32px);
  .topology-node {
    height: 55px;
    text-align: center;
    padding: 5px;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    .node-icon {
      display: inline-block;
      width: 100%;
      font-size: 30px;
    }
    .node-name {
      width: 100%;
      overflow: hidden; /* 超出的部分隐藏起来 */
      text-overflow: ellipsis; /* 超出的部分用省略号代替 */
      white-space: nowrap; /*规定不换行*/
    }
  }
}
</style>