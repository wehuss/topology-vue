import Vue from 'vue'
import input from 'element-ui/packages/input'
import inputNumber from 'element-ui/packages/input-number'

const creatTopologyInput = (fn) => Vue.extend({
  ...input,
  beforeMount() {
    this.handleChange = (event) => {
      this.$emit('change', event.target.value)
      fn(event.target.value)
    }
  }
})

const creatTopologyInputNumber = (fn) => Vue.extend({
  ...inputNumber,
  beforeMount() {
    this.setCurrentValue = (newVal) => {
      const oldVal = this.currentValue
      if (typeof newVal === 'number' && this.precision !== undefined) {
        newVal = this.toPrecision(newVal, this.precision)
      }
      if (newVal >= this.max) newVal = this.max
      if (newVal <= this.min) newVal = this.min
      if (oldVal === newVal) return
      this.userInput = null
      this.$emit('input', newVal)
      this.$emit('change', newVal, oldVal)
      this.currentValue = newVal
      fn(newVal)
    }
  }
})


export default (vuex) => {
  const updateProps = (value) => { vuex.state.canvas.updateProps(value) }

  const nodeInput = creatTopologyInput(updateProps)
  const nodeInputNumber = creatTopologyInputNumber(updateProps)
  
  Vue.component('node-input', nodeInput)
  Vue.component('node-input-number', nodeInputNumber)
}