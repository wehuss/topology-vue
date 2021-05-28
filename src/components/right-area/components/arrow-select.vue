<template>
  <div>
    <el-select :value="value" @input="input" placeholder="请选择">
      <el-option
        v-for="item in arrows"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  props: {
    value: {}
  },
  data() {
    return {
      arrows: [
        {
          label: '无箭头',
          value: false
        },
        {
          label: '实心三角形',
          value: 'triangleSolid'
        },
        {
          label: '空心三角形',
          value: 'triangle'
        },
        {
          label: '实心菱形',
          value: 'diamondSolid'
        },
        {
          label: '空心菱形',
          value: 'diamond'
        },
        {
          label: '实心圆',
          value: 'circleSolid'
        },
        {
          label: '空心圆',
          value: 'circle'
        },
        {
          label: '线型箭头',
          value: 'line'
        },
        {
          label: '上单边线箭头',
          value: 'lineUp'
        },
        {
          label: '下单边线箭头',
          value: 'lineDown'
        }
      ]
    }
  },
  methods:{
    input(value){
      this.$emit('input',value)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>