<template>
  <div id="app">
    <center-area />
  </div>
</template>

<script>
import CenterArea from './components/center-area'
import registerElementInput from './registerElementInput'

export default {
  name: 'App',
  components: {
    CenterArea
  },
  created() {
    registerElementInput(this.$store)
    // this.$nextTick(()=>{
    //   console.log('vue',Vue)
    // })
  }
}
</script>

<style>
* {
  margin: 0;
}
</style>
