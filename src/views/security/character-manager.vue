<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.role" placeholder="筛选角色名" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button class="filter-item" style="margin-left: 10px" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-refresh" @click="handleReset">重置</el-button>

    </div>
    <div class="filter-container">
      <el-button class="filter-item" style="width: 120px" type="info" round @click="handleFilter">添加</el-button>
      <el-button class="filter-item" style="width: 120px;margin-left: 10px;" type="info" round @click="handleCreate">修改</el-button>
      <el-button class="filter-item" style="width: 120px;margin-left: 10px;" type="info" round @click="handleCreate">删除</el-button>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%"
      border
      highlight-current-row
      :header-cell-style="tableHeaderStyle"
      @current-change="handleCurrentChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column label="角色名" prop="role" align="center" />

      <el-table-column label="描述" prop="description" align="center" />
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
export default {
  name: 'CharacterManager',
  directives: { waves },
  components: { Pagination },
  data() {
    return {
      total: 0,
      listQuery: {
        page: 1,
        limit: 10,
        role: undefined
      },
      tableData: [{
        role: '普通管理员',
        description: '默认的系统管理角色，与超级管理员相比缺少以下权限：管理员配置、角色管理、系统配置等。建议一般的系统维护人员使用该角色。'
      },
      {
        role: '超级管理员',
        description: '默认的系统管理角色，具有全部权限。'
      },
      {
        role: '只读管理员',
        description: '默认的系统管理角色，只具有只读权限，所有的修改操作无效'
      }
      ]
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
