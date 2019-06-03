<template>
  <div class="app-container">

    <div class="filter-container">
    <el-input v-model="listQuery.name" placeholder="筛选名称" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />

    <el-select v-model="listQuery.type" placeholder="筛选类型" class="filter-item" clearable style="width: 150px">
      <el-option label="随机池" value="suiji"></el-option>
      <el-option label="静态池" value="jingtai"></el-option>
      <el-option label="标准桌面" value="biaozhun"></el-option>
      <el-option label="3D桌面" value="3d"></el-option>
    </el-select>

    <el-input v-model="listQuery.user" placeholder="筛选用户" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />

    <el-input v-model="listQuery.ServerID" placeholder="服务ID" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />

    <el-select v-model="listQuery.maintain" placeholder="维护模式" class="filter-item" clearable style="width: 150px">
      <el-option label="是" value="true"></el-option>
      <el-option label="否" value="false"></el-option>
    </el-select>

    <el-input v-model="listQuery.desktopName" placeholder="桌面名称" style="width: 150px;" class="filter-item" @keyup.enter.native="handleFilter" />

    <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
    <el-button class="filter-item" style="margin-left: 10px;" type="danger" icon="el-icon-refresh" @click="handleReset">重置</el-button>

  </div>

    <div class="filter-container">
      <el-button class="filter-item" type="info" round disabled @click="handleFilter">添加桌面</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="info" round @click="handleCreate" >分配用户</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="info" round @click="handleCreate">切换镜像</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="info" round @click="handleCreate">启用维护模式</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="info" round @click="handleCreate">禁用维护模式</el-button>
      <el-dropdown @command="handleCommand">
        <el-button class="filter-item" style="margin-left: 10px;" type="info" round>
          更多<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">修改配置</el-dropdown-item>
          <el-dropdown-item command="b">重启桌面</el-dropdown-item>
          <el-dropdown-item command="c">关闭桌面</el-dropdown-item>
          <el-dropdown-item command="d">删除桌面组</el-dropdown-item>
          <el-dropdown-item command="e">重命名</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <el-table
        :data="tableData"
        style="width: 100%"
        border
        highlight-current-row
        @current-change="handleCurrentChange">
        <el-table-column
          label="名称"
          prop="name"
          sortable
          align="center">
        </el-table-column>
        <el-table-column
          label="类型"
          prop="type"
          align="center">
        </el-table-column>
        <el-table-column
          label="维护模式"
          prop="maintain"
          align="center">
        </el-table-column>
        <el-table-column
          label="桌面总数"
          prop="total"
          align="center">
        </el-table-column>
        <el-table-column
          label="已启动(未注册)"
          prop="unregister"
          align="center">
        </el-table-column>
        <el-table-column
          label="已注册"
          prop="register"
          align="center">
        </el-table-column>
        <el-table-column
          label="已连接"
          prop="connect"
          align="center">
        </el-table-column>
        <el-table-column
          type="expand"
          label="详情"
          width="100">
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
  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
export default {
  name: "desktop-group",
  directives: { waves },
  data() {
    return {
      listQuery: {
        page: 1,
        limit: 10,
        name: undefined,
        user: undefined,
        type: undefined,
        ServerID: undefined,
        maintain: undefined,
        desktopName: undefined,
      },
      tableData: [{
        name:'liantong',
        type:'3D桌面',
        maintain:'否',
        total:'2',
        unregister:'0',
        register:'0',
        connect:'0'
      },
      {
        name:'test',
        type:'标准桌面',
        maintain:'否',
        total:'1',
        unregister:'0',
        register:'1',
        connect:'0'
      }]
    }
  },
  methods: {
    handleFilter() {

    },
    handleReset() {

    },
    handleCreate() {

    },
    handleCurrentChange(val){
      console.log(val)
    },
    handleCommand(command) {
      this.$message('click on item ' + command);
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
