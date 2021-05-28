<template>
  <div class="right-area">
    <node-form v-if="curNode" />
    <canvas-form v-else-if="canvas" />
  </div>
</template>

<script>
import NodeForm from './node-form'
import CanvasForm from './canvas-form'
import { mapState } from 'vuex'
export default {
  // props:['curNode'],
  components: {
    NodeForm,
    CanvasForm
  },
  computed: mapState(['canvas', 'curNode'])
}
</script>

<style lang="scss" scoped>
.right-area {
  padding: 16px;
  border-left: 1px solid #ebeef5;
  height: calc(100vh - 32px);
}
</style>