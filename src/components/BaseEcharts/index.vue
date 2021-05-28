<template>
  <div class="jinf-echarts">
    <div
    :style="{height:height||'100%'}"
      class="chart"
      ref="chart"
    ></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  props: {
    option: {
      type: Object,
      default: () => ({}),
    },
    height: [String, Number],
  },
  data() {
    return {
      // 保存chart示例,父组件可获取
      chart: {},
      keys: null,
    }
  },
  mounted() {
    this.init()
    const init = this.init.bind(this)
    // 用于父组件获取init函数与图表实例的resize函数，可用于父组件特殊情况下用于重新渲染图标
    this.$emit('mandatoryRendering', init, this.chart.resize)
  },
  beforeDestroy() {
    this.chart.dispose()
  },
  watch: {
    option: {
      handler() {
        this.chart.setOption && this.chart.setOption(this.option)
        this.chart.setOption && this.chart.resize()
      },
      deep: true,
    },
  },
  methods: {
    init() {
      const chart = echarts.init(this.$refs.chart)
      chart.setOption(this.option)
      this.chart = chart
      // 图表创建成功后通知父组件，类似于生命周期函数
      this.$emit('initEnd', chart)
      window.addEventListener('resize', () => {
        this.chart.resize()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.jinf-echarts {
  width: 100%;
  height: 100%;
  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>