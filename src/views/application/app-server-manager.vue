<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.name" placeholder="筛选名称" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.appGroup" placeholder="筛选应用组" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.ipAddr" placeholder="筛选IP地址" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />

      <el-select v-model="listQuery.maintain" placeholder="维护模式" class="filter-item" clearable style="width: 150px">
        <el-option label="是" value="true" />
        <el-option label="否" value="false" />
      </el-select>

      <el-select v-model="listQuery.status" placeholder="运行状态" class="filter-item" clearable style="width: 150px">
        <el-option label="创建中" value="" />
        <el-option label="关闭" value="" />
        <el-option label="关闭中" value="" />
        <el-option label="已启动(未注册)" value="" />
        <el-option label="已注册" value="" />
        <el-option label="重启中" value="" />
        <el-option label="删除中" value="" />
        <el-option label="重建中" value="" />
        <el-option label="不可用" value="" />
        <el-option label="迁移中" value="" />
      </el-select>

      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-refresh" @click="handleReset">重置</el-button>

    </div>
    <div class="filter-container">
      <el-button class="filter-item" type="info" round @click="handleFilter">启动</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="info" round @click="handleCreate">重启</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="info" round @click="handleCreate">关闭</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="info" round @click="handleCreate">启动维护模式</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="info" round @click="handleCreate">禁用维护模式</el-button>
      <el-dropdown @command="handleCommand">
        <el-button class="filter-item" style="margin-left: 10px;" type="info" round>
          更多<i class="el-icon-arrow-down el-icon--right" />
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">强制重启</el-dropdown-item>
          <el-dropdown-item command="b">强制关闭</el-dropdown-item>
          <el-dropdown-item command="c">远程连接</el-dropdown-item>
          <el-dropdown-item command="d">删除</el-dropdown-item>
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
      <el-table-column type="selection" width="55" />
      <el-table-column label="名称" prop="name" sortable align="center" />

      <el-table-column label="应用组" prop="appGroup" align="center" />

      <el-table-column label="IP地址" prop="IPAddr" align="center" />

      <el-table-column label="维护模式" prop="maintain" align="center" />

      <el-table-column label="会话数量" prop="sessionNum" align="center" />

      <el-table-column label="运行状态" prop="status" align="center" />

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
</template>

<script>
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
export default {
  name: 'AppServerManager',
  directives: { waves },
  components: { Pagination },
  data() {
    return {
      total: 0,
      listQuery: {
        page: 1,
        limit: 10,
        name: undefined,
        appGroup: undefined,
        ipAddr: undefined,
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
