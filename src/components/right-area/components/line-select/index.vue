<template>
  <div>
    <el-select :value="value" @input="input" placeholder="请选择">
      <el-option
        v-for="item in currentOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import selectData from './selectData'
export default {
  props: {
    value: {},
    type: {
      typeof: String,
      default: 'arrows'
    }
  },
  data() {
    return {
      selectData
    }
  },
  computed: {
    currentOptions() {
      return this.selectData[this.type]
    }
  },
  methods: {
    input(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>