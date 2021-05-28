import { registerNode } from '@topology/core'
import vueNodes from './vueNodes'
// import { Button } from 'element-ui'
// import LeftArea from './left-area.vue'
// import VButton from './vue-components/v-button.vue'
// import VGradientStackedAreaChart from './vue-components/VGradientStackedAreaChart'
// import VAttributeText from './vue-components/VAttributeText'
import {
  flowData,
  flowDataAnchors,
  flowDataIconRect,
  flowDataTextRect,
} from '@topology/flow-diagram'
import {
  activityFinal,
  activityFinalIconRect,
  activityFinalTextRect
} from '@topology/activity-diagram'

const requireComponents = require.context('./vue-components', true, /index.vue$/)

export default () => {
  registerNode(
    'flowData',
    flowData,
    flowDataAnchors,
    flowDataIconRect,
    flowDataTextRect
  )
  registerNode(
    'activityFinal',
    activityFinal,
    null,
    activityFinalIconRect,
    activityFinalTextRect
  )
  requireComponents.keys().forEach(fileName => {
    const component = requireComponents(fileName)
    const componentName = component.default.name
    // console.log('componentName',componentName)
    registerNode(componentName, vueNodes(component.default || component), null, null, null)
  })
  // registerNode('vButton', vueNodes(VButton), null, null, null)
  // registerNode('test', vueNodes(LeftArea), null, null, null)
  // registerNode('VGradientStackedAreaChart', vueNodes(VGradientStackedAreaChart), null, null, null)
  // registerNode('VAttributeText', vueNodes(VAttributeText), null, null, null)
}