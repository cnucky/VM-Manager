<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button class="filter-item" style="width: 120px" type="info" round @click="handleFilter">添加账户</el-button>
      <el-button class="filter-item" style="width: 120px;margin-left: 10px;" type="info" round @click="handleCreate">添加组织</el-button>
      <el-button class="filter-item" style="width: 120px;margin-left: 10px;" type="info" round @click="handleCreate">修改账户</el-button>
      <el-button class="filter-item" style="width: 120px;margin-left: 10px;" type="info" round @click="handleCreate">修改组织</el-button>
      <el-dropdown @command="handleCommand">
        <el-button class="filter-item" style="margin-left: 10px;" type="info" round>
          更多<i class="el-icon-arrow-down el-icon--right" />
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">删除账户</el-dropdown-item>
          <el-dropdown-item command="b">删除组织</el-dropdown-item>
          <el-dropdown-item command="c">导入账户</el-dropdown-item>
          <el-dropdown-item command="d">重置密码</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-input placeholder="输入关键字进行过滤" v-model="filterText" style="width: 700px;margin-bottom: 20px">
    </el-input>

    <el-tree
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      show-checkbox
      :filter-node-method="filterNode"
      ref="tree">
    </el-tree>
  </div>
</template>

<script>
  import waves from '@/directive/waves' // waves directive
  import Pagination from '@/components/Pagination' // secondary package based on el-pagination
  export default {
    name: 'ADManager',
    directives: { waves },
    components: { Pagination },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    },
    data() {
      return {
        filterText: '',
        data: [{
          id: 1,
          label: 'WeixunCloud',
          children: [{
            id: 1,
            label: 'admin'
          },
            {
              id: 2,
              label: 'user'
            },
            {
              id: 3,
              label: 'test'
            }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
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
