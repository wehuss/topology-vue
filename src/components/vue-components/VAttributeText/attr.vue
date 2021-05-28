<template>
  <div class="test">
    <el-form>
      <el-form-item label="绑定的属性">
        <el-select
          v-model="value"
          placeholder="请选择"
          clearable
          @change="selectAttribute"
          @clear="selectAttribute"
        >
          <el-option
            v-for="(item, name) in options"
            :key="item.name"
            :label="item.name"
            :value="name"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      options: {
        wendu: {
          name: '温度',
          unit: '℃'
        },
        shidu: {
          name: '湿度',
          unit: '%'
        },
        dianliu: {
          name: '电流',
          unit: 'A'
        },
        dianya: {
          name: '电压',
          unit: 'V'
        }
      },
      value: ''
    }
  },
  computed: {
    ...mapGetters(['vData'])
  },
  created() {
    this.$nextTick(() => {
      this.value = this.vData.attributeKey || null
    })
  },
  methods: {
    selectAttribute(attributeKey) {
      // console.log('attributeKey', attributeKey,this.vData, Boolean(attributeKey))
      let value = {}
      if (attributeKey) {
        const values = this.options[attributeKey]
        value = {
          attributeKey,
          attributeName: values.name,
          attributeUnit: values.unit
        }
      }
      this.$store.commit('setVData', {
        value,
        merge: Boolean(attributeKey)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  padding: 20px;
  // background: red;
}
</style>