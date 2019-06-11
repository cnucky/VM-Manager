<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.name" placeholder="筛选名称" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.appObject" placeholder="筛选应用对象" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-refresh" @click="handleReset">重置</el-button>

    </div>
    <div class="filter-container">
      <el-button class="filter-item" type="info" round style="width: 120px" @click="handleFilter">添加</el-button>
      <el-button class="filter-item" style="margin-left: 10px; width: 120px;" type="info" round @click="handleCreate">修改</el-button>
      <el-button class="filter-item" style="margin-left: 10px; width: 120px;" type="info" round @click="handleCreate">删除</el-button>

      <el-table
        :data="tableData"
        style="width: 100%"
        border
        highlight-current-row
        :header-cell-style="tableHeaderStyle"
        @current-change="handleCurrentChange"
      >
        <el-table-column type="index" width="50" />
        <el-table-column label="名称" prop="name" sortable align="center" />

        <el-table-column label="应用对象" prop="appObject" align="center" />

        <el-table-column label="更新时间" prop="updateTime" align="center" />

        <el-table-column type="expand" label="详情" width="100">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="无:">
                <span>{{ props.row.name }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
      </el-table>

      <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
    </div>
  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
export default {
  name: 'AppStrategyManager',
  directives: { waves },
  components: { Pagination },
  data() {
    return {
      total: 0,
      listQuery: {
        page: 1,
        limit: 10,
        name: undefined,
        appObject: undefined
      },
      tableData: []
    }
  },
  mounted() {
    this.total = this.tableData.length
  },
  methods: {
    getList() {

    },
    handleFilter() {

    },
    handleReset() {

    },
    handleCreate() {

    },
    handleCurrentChange(val) {
      console.log(val)
    },
    handleCommand(command) {
      this.$message('click on item ' + command)
    },
    tableHeaderStyle() {
      return 'background: #F2F2F2'
    }
  }
}
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
