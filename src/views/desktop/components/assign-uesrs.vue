<template>
  <el-form
    ref="assignForm"
    :model="assignForm"
    :rules="rules"
    label-position="left"
    label-width="120px">
    <el-form-item label="桌面组用户" prop="userList">
      <el-col :span="12">
        <el-input placeholder="输入关键字进行过滤" v-model="filterText" style="margin-bottom: 10px;"></el-input>

        <el-tree
          class="filter-tree"
          :data="treeList"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
          ref="tree"
          show-checkbox
          highlight-current
          @check-change="getChecked">
        </el-tree>

      </el-col>

    </el-form-item>

    <el-form-item label="桌面数量" prop="desktopNumber">
      <el-col :span="12">
        <el-input v-model="assignForm.desktopNumber"/>
      </el-col>
    </el-form-item>

    <el-form-item>
      <el-button @click="previous()">上一步</el-button>
      <el-button type="primary" @click="next('assignForm')">下一步</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
export default {
  name: 'AssignUesrs',
  props: ['configForm'],
  data() {
    let validateUserList =  (rule, value, callback) => {
      if (this.assignForm.userList.length === 0) {
        callback(new Error('至少选中一个用户'));
      } else {
        callback();
      }
    }
    let validatedesktopNumber =  (rule, value, callback) => {
      let flag = value >= 1 && value <= this.assignForm.userList.length * this.configForm.desktopMaxConnect
      if (!flag) {
        callback(new Error('每个用户至少分配一个桌面且小于 桌面最大连接数*用户数量'));
      } else {
        callback();
      }
    }
    return {
      filterText: '',
      treeList: [{
        label: 'WeixunCloud',
        children: [
          {label: 'admin'},
          {label: 'qwe'},
          {label: 'user'},
        ]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      assignForm: {
        userList: [],
        desktopNumber: ''
      },
      rules: {
        userList: [
          { validator: validateUserList, required: true, trigger: 'change'  },
        ],
        desktopNumber: [
          { validator: validatedesktopNumber, required: true, trigger: 'change'}
        ]
      }
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  methods: {
    previous() {
      this.$emit('getChildInfo', 1)
    },
    next(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('getChildInfo', 3, this.assignForm)
          this.$emit('mergeForm', 3)
        } else {
          return false;
        }
      });
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    getChecked() {
      this.assignForm.userList = []
      this.$refs.tree.getCheckedNodes(true).forEach((item)=>{
        this.assignForm.userList.push(item.label)
      })
    }
  }
}
</script>

<style scoped>

</style>
