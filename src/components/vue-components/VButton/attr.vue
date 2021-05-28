<template>
  <div class="test">
    <el-form>
      <el-form-item label="按钮内容">
        <el-input v-model="vData.text"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['vData'])
}
</script>

<style lang="scss" scoped>
.test {
  padding: 20px;
  // background: red;
}
</style>