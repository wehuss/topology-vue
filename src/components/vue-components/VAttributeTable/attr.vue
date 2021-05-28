<template>
  <div class="test">
    <el-button type="primary" @click="dialogVisible = !dialogVisible"
      >配置表格显示行</el-button
    >
    <el-dialog
      title="配置表格显示行"
      :visible.sync="dialogVisible"
      width="30%"
      @opened="setSelectionRows"
    >
      <el-table
        :data="tableData"
        @selection-change="selectionChange"
        ref="table"
        border
        style="width: 100%"
      >
        <el-table-column type="selection"> </el-table-column>
        <el-table-column prop="name" label="属性名称"> </el-table-column>
        <el-table-column prop="identifier" label="标识符"> </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="changeCurComponentAttrValue"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      dialogVisible: false,
      selectionRows: [],
      tableData: [
        {
          name: 'cpu温度',
          identifier: '温度'
        },
        {
          name: 'cpu频率',
          identifier: 'cpu频率'
        },
        {
          name: '散热风扇转速',
          identifier: '转速'
        },
        {
          name: '内存大小',
          identifier: '内存大小'
        },
        {
          name: '内存使用率',
          identifier: '内存使用率'
        },
        {
          name: '内存频率',
          identifier: '内存频率'
        }
      ]
    }
  },
  computed: mapGetters(['vData']),
  methods: {
    selectionChange(selectionRows) {
      this.selectionRows = selectionRows
    },
    changeCurComponentAttrValue() {
      this.$store.commit('setVData', {
        value: {
          tableData: this.selectionRows
        }
      })
      this.dialogVisible = false
      this.selectionRows = []
    },
    handleClose() {
      this.dialogVisible = false
      this.$refs.table.clearSelection()
      this.selectionRows = []
    },
    setSelectionRows() {
      const arr = []
      // console.log('select',this.vData)
      this.vData.tableData.forEach(item => {
        // console.log('item', item)
        for (let i = 0; i < this.tableData.length; i++) {
          // console.log('for')
          if (
            this.tableData[i].name === item.name ||
            this.tableData[i].identifier === item.identifier
          ) {
            arr.push(this.tableData[i])
            break
          }
        }
      })
      arr.forEach(item => {
        this.$refs.table.toggleRowSelection(item, true)
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