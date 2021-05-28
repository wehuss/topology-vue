<template>
  <div>
    <el-divider content-position="left">连线配置</el-divider>
    <div>
      <el-form size="mini">
        <el-form-item label="连线类型">
          <line-select type="name" v-model="line.name" />
        </el-form-item>
        <el-form-item label="连线样式">
          <line-select type="dash" v-model="line.dash" />
        </el-form-item>
        <el-form-item label="起点箭头">
          <line-select type="arrows" v-model="line.fromArrow" />
        </el-form-item>
        <el-form-item label="终点箭头">
          <line-select type="arrows" v-model="line.toArrow" />
        </el-form-item>
        <el-form-item label="连线颜色">
          <el-color-picker v-model="line.strokeStyle"></el-color-picker>
        </el-form-item>
        <el-form-item label="连线宽度">
          <el-input-number v-model="line.lineWidth"></el-input-number>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import ArrowSelect from './components/arrow-select'
import LineSelect from './components/line-select'
import { mapState } from 'vuex'

export default {
  components: {
    // ArrowSelect,
    LineSelect
  },
  data() {
    return {}
  },
  computed: mapState(['line'])
}
</script>

<style lang="scss" scoped>
</style>