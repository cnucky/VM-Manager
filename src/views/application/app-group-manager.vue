<template>
  <div class="app-container">
  <div class="filter-container">
    <el-input v-model="listQuery.name" placeholder="筛选名称" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />
    <el-input v-model="listQuery.appname" placeholder="筛选应用名称" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />
    <el-input v-model="listQuery.user" placeholder="筛选用户名" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />

    <el-select v-model="listQuery.maintain" placeholder="维护模式" class="filter-item" clearable style="width: 150px">
      <el-option label="是" value="true" />
      <el-option label="否" value="false" />
    </el-select>

    <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
    <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-refresh" @click="handleReset">重置</el-button>

    </div>
    <div class="filter-container">
      <el-button class="filter-item" type="info" round @click="handleFilter">添加</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="info" round @click="handleCreate">发布应用</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="info" round @click="handleCreate">分配用户</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="info" round @click="handleCreate">启用维护模式</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="info" round @click="handleCreate">禁用维护模式</el-button>
      <el-dropdown @command="handleCommand">
        <el-button class="filter-item" style="margin-left: 10px;" type="info" round>
          更多<i class="el-icon-arrow-down el-icon--right" />
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">修改配置</el-dropdown-item>
          <el-dropdown-item command="b">添加服务器</el-dropdown-item>
          <el-dropdown-item command="c">切换镜像</el-dropdown-item>
          <el-dropdown-item command="d">删除应用组</el-dropdown-item>
          <el-dropdown-item command="e">重命名</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

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

      <el-table-column label="维护模式" prop="maintain" align="center" />

      <el-table-column label="服务器数量" prop="serverNum" align="center" />

      <el-table-column label="已注册服务器" prop="register" align="center" />

      <el-table-column label="应用数量" prop="appNum" align="center" />

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
  name: 'AppGroupManager',
  directives: { waves },
  components: { Pagination },
  data() {
    return {
      total: 0,
      listQuery: {
        page: 1,
        limit: 10,
        name: undefined,
        appname: undefined,
        user: undefined,
        maintain: undefined
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
