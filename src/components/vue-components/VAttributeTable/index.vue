<template>
  <el-table :data="vData.tableData" style="width: 100%">
    <el-table-column prop="name" label="属性名"></el-table-column>
    <el-table-column prop="identifier" label="标识符"></el-table-column>
    <el-table-column prop="test" label="属性值">
      <template slot-scope="">
        {{ Math.floor(Math.random() * (100 - 1)) + 1 }}
      </template>
    </el-table-column>
    <el-table-column prop="state" label="状态">
      <template slot-scope="">
        <el-tag
          :type="Math.round(Math.random()) ? 'success' : 'danger'"
          disable-transitions
          >{{ Math.round(Math.random()) ? "success" : "danger" }}</el-tag
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'VAttributeTable',
  props: {},
  data() {
    return {
      AttrListComponent: () => import('./attr.vue'),
      vData: {
        tableData: []
      }
    }
  }
}
</script>

  <style lang="scss" scoped>
</style>