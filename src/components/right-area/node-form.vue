<template>
  <div>
    <div v-if="rect">
      <el-divider content-position="left">基础设置</el-divider>
      <el-form label-width="auto">
        <el-form-item label="X">
          <node-input-number v-model="rect.x"></node-input-number>
        </el-form-item>
        <el-form-item label="Y">
          <node-input-number v-model="rect.y"></node-input-number>
        </el-form-item>
        <el-form-item label="宽度">
          <node-input-number v-model="rect.width"></node-input-number>
        </el-form-item>
        <el-form-item label="高度">
          <node-input-number v-model="rect.height"></node-input-number>
        </el-form-item>
      </el-form>
    </div>
    <div v-if="vData && curAttrComponent">
      <el-divider content-position="left">组件数据</el-divider>
      <component :is="curAttrComponent" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState(['canvas', 'curNode']),
    ...mapGetters(['curAttrComponent', 'vData']),
    // vData() {
    //   return this.curNode.vData || false
    // },
    rect() {
      return this.curNode.rect || false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>