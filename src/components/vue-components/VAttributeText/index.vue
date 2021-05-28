<template>
  <div>
    <el-row>
      <el-col :span="10"> {{ vData.attributeName || "请选择属性" }}: </el-col>
      <el-col :span="14">
        {{ vData.attributeName ? value : "请选择属性" }}
        {{ vData.attributeUnit }}
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'VAttributeText',
  data() {
    return {
      AttrListComponent: () => import('./attr.vue'),
      value: 0,
      timer: null,
      DonItSet: true,
      vData: {
        attributeName: '',
        attributeKey: '',
        attributeUnit: ''
      }
    }
  },
  watch: {
    vData() {
      this.getRandomValue()
    }
  },
  created() {
    this.getRandomValue()
  },
  methods: {
    getRandomValue() {
      if (this.vData.attributeName) {
        this.timer = setInterval(() => {
          this.value = Math.floor(Math.random() * (100 - 1)) + 1
        }, 3000)
      } else if (typeof this.timer === 'number') {
        clearInterval(this.timer)
        this.value = 0
      }
    }
    // handleResize(style) {
    //   // if (style.height) {
    //   //   this.$store.commit('setShapeSingleStyle', { key: 'lineHeight', value: style.height })
    //   // }
    // }
  }
}
</script>

<style lang="scss" scoped>
</style>