<template>
  <div class="test">
    <el-form>
      <el-form-item label="图表标题">
        <el-input v-model="vData.title"></el-input>
      </el-form-item>
      <el-form-item label="图例颜色">
        <el-color-picker v-model="vData.legendColor"></el-color-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['vData']),
}
</script>

<style lang="scss" scoped>
.test{
  padding: 20px;
  // background: red;
}
</style>