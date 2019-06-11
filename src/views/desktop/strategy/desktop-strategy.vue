<template>
  <div class="app-container">

    <div class="filter-container">
      <el-input v-model="listQuery.name" placeholder="名称" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />

      <el-input v-model="listQuery.appObject" placeholder="应用对象" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />

      <el-select v-model="listQuery.appObjectType" placeholder="应用对象类型" class="filter-item" clearable style="width: 150px">
        <el-option label="桌面" value="desktop" />
        <el-option label="桌面组" value="desktopGroup" />
      </el-select>

      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="danger" icon="el-icon-refresh" @click="handleReset">重置</el-button>

    </div>

    <div class="filter-container">
      <el-button class="filter-item" type="info" round disabled @click="handleFilter">添加</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="info" round @click="handleCreate">修改</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="info" round @click="handleCreate">删除</el-button>

    </div>

    <el-table
      :data="tableData"
      style="width: 100%"
      border
      highlight-current-row
      :header-cell-style="tableHeaderStyle"
      @current-change="handleCurrentChange"
    >
      <el-table-column
        label="策略名称"
        prop="name"
        sortable
        align="center"
      />
      <el-table-column
        label="应用对象"
        prop="appObject"
        align="center"
      />
      <el-table-column
        label="应用对象类型"
        prop="appObjectType"
        align="center"
      />
      <el-table-column
        label="更新事件"
        prop="updateTime"
        align="center"
      />
      <el-table-column
        type="expand"
        label="详情"
        width="100"
      >
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="桌面云描述:">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="支持远程登录:">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="镜像:">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="3D桌面配置:">
              <span>{{ props.row.type }}</span>
            </el-form-item>
            <el-form-item label="远程桌面配置:">
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
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
export default {
  name: 'DesktopStrategy',
  components: { Pagination },
  data() {
    return {
      total: 0,
      listQuery: {
        page: 1,
        limit: 10,
        name: undefined,
        powerControlType: undefined,
        appObject: undefined,
        appObjectType: undefined
      },
      tableData: [{
        name: 'liantong',
        powerControlType: '3D桌面',
        appObject: '否',
        appObjectType: '2',
        updateTime: '0'
      },
      {
        name: 'liantong',
        powerControlType: '3D桌面',
        appObject: '否',
        appObjectType: '2',
        updateTime: '0'
      }]
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
