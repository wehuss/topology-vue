<template>
  <div class="v-button-wrapper">
    <el-button type="success" class="v-button">
      {{ vData.text }}
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'VButton',
  data() {
    return {
      AttrListComponent: () => import('./attr.vue'),
      vData: {
        text: null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-button-wrapper {
  width: 100%;
  height: 100%;
}
.v-button {
  display: inline-block;
  margin: 2px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
}
</style>