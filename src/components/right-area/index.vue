<template>
  <div class="right-area">
    <node-form v-if="curNode" />
    <line-form v-else-if="line" />
    <canvas-form v-else-if="canvas" />
  </div>
</template>

<script>
import NodeForm from './node-form'
import CanvasForm from './canvas-form'
import LineForm from './line-form'
import { mapState } from 'vuex'
export default {
  // props:['curNode'],
  components: {
    NodeForm,
    CanvasForm,
    LineForm
  },
  computed: mapState(['canvas', 'curNode', 'line'])
}
</script>

<style lang="scss" scoped>
.right-area {
  padding: 16px;
  border-left: 1px solid #ebeef5;
  height: calc(100vh - 32px);
}
</style>