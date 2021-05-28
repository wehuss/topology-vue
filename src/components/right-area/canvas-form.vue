<template>
  <div>
    <div>
      <el-divider content-position="left">画布配置</el-divider>
      <!-- <el-form size="mini">
        <el-form-item label="MQTT地址">
          <el-radio-group v-model="options.grid">
            <el-radio :label="true">开启</el-radio>
            <el-radio :label="false">关闭</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form> -->
    </div>
    <div>
      <el-divider content-position="left">MQTT配置</el-divider>
      <el-form size="mini">
        <el-form-item label="MQTT地址">
          <el-input required v-model="mqtt.mqtt" />
        </el-form-item>
        <!-- <el-form-item label="Client ID">
          <el-input required v-model="mqtt.clientId" />
        </el-form-item> -->
        <el-form-item label="用户名">
          <el-input required v-model="mqtt.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input required v-model="mqtt.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 40%" @click="openMqtt"
            >测试连接</el-button
          >
          <el-button type="warning" style="width: 40%" @click="closeMqtt"
            >断开连接</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      mqtt: {
        mqtt: null,
        // clientId: null,
        username: null,
        password: null
      }
    }
  },
  computed: {
    ...mapState(['canvas']),
    options(){
      return this.canvas.options
    }
  },
  methods: {
    openMqtt() {
      this.canvas.openMqtt(this.mqtt.mqtt, this.mqtt)
    },
    closeMqtt() {
      this.canvas.closeMqtt()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>