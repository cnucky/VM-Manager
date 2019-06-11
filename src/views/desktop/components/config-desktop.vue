<template>
  <el-form
    ref="configForm"
    :model="configForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    label-position="left"
  >
    <el-form-item label="桌面命名规则" prop="nameRule">
      <el-input v-model="configForm.nameRule" style="width: 50%;" />
    </el-form-item>
    <el-form-item label="所属组织" prop="ou">
      <el-select v-model="configForm.ou" placeholder="请选择组织">
        <el-option label="Computers" value="Computers" />
      </el-select>
    </el-form-item>

    <el-form-item label="桌面最大连接数" prop="desktopMaxConnect">
      <el-input v-model="configForm.desktopMaxConnect" style="width: 50%;" />
    </el-form-item>

    <el-form-item label="CPU" prop="cpu">
      <el-radio-group v-model="configForm.cpu">
        <el-radio :label="1">1核</el-radio>
        <el-radio :label="2">2核</el-radio>
        <el-radio :label="4">4核</el-radio>
        <el-radio :label="8">8核</el-radio>
        <el-radio :label="0">其他</el-radio>
        <el-input v-show="configForm.cpu === 0" v-model="configForm.cpu" style="width: 50px;" />
      </el-radio-group>
    </el-form-item>

    <el-form-item label="内存" prop="memory">
      <el-radio-group v-model="configForm.memory">
        <el-radio :label="2">2GB</el-radio>
        <el-radio :label="4">4GB</el-radio>
        <el-radio :label="8">8GB</el-radio>
        <el-radio :label="16">16GB</el-radio>
        <el-radio :label="0">其他</el-radio>
        <el-input v-show="configForm.memory === 0" v-model="configForm.memory" style="width: 50px;" />
      </el-radio-group>
    </el-form-item>

    <el-form-item label="磁盘配置" prop="systemLocation">
      系统盘位置:
      <el-select v-model="configForm.systemLocation">
        <el-option label="Local storage" value="Local storage" />
      </el-select>
    </el-form-item>

    <el-form-item label="" prop="userLocation">
      用户盘位置:
      <el-select v-model="configForm.userLocation" style="margin-bottom: 20px;">
        <el-option label="Local storage" value="Local storage" />
      </el-select>
      <br>

      <ul v-for="(item, index) in configForm.storageSizeList" :key="index">
        <li style="margin-bottom: 10px">
          用户磁盘: <el-input v-model="configForm.storageSizeList[index]" style="width: 65px;"/> GB
          <i class="el-icon-circle-close" @click="del(index)" style="margin-left: 10px"></i>
        </li>
      </ul>
      <el-button icon="el-icon-circle-plus" @click="add" :disabled="disabledBtn" style="margin-top: -10px">添加用户磁盘</el-button>

    </el-form-item>

    <el-form-item>
      <el-button @click="previous()">上一步</el-button>
      <el-button type="primary" @click="next('configForm')">下一步</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'ConfigDesktop',
  props: [],
  data() {
    let validateStorageSize =  (rule, value, callback) => {
      if (this.configForm.storageSizeList.length) {
        let flag = this.configForm.storageSizeList.filter((item)=>{
          return item%5 !== 0 || item <= 0 || item >= 999
        })
        if (flag.length){
          callback(new Error('用户磁盘大小为1~999G,且为5的倍数。'));
        }else {
          callback();
        }
      } else {
        callback();
      }
    }
    return {
      disabledBtn:false,
      configForm: {
        nameRule: '',
        ou: 'Computers',
        desktopMaxConnect: 1,
        cpu: 1,
        memory: 2,
        systemLocation:'Local storage',
        userLocation:'Local storage',
        storageSizeList:[],
      },
      rules: {
        nameRule: [
          { required: true, message: '请输入桌面命名规则', trigger: 'change' },
        ],
        ou: [
          { required: true, message: '请选择所属组织', trigger: 'change' },
        ],
        desktopMaxConnect: [
          { required: true, message: '请输入桌面最大连接数', trigger: 'change' }
        ],
        cpu: [
          { required: true, message: '请选择CPU核数', trigger: 'change' }
        ],
        memory: [
          { required: true, message: '请选择内存大小', trigger: 'change' }
        ],
        systemLocation: [
          { required: true, message: '请选择系统盘存储位置', trigger: 'change' }
        ],
        userLocation: [
          { validator: validateStorageSize, trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    previous() {
      this.$emit('getChildInfo', 0)
    },
    next(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('getChildInfo', 2, this.configForm)
        } else {
          return false;
        }
      });
    },
    add() {
      this.configForm.storageSizeList.push(40)
      if (this.configForm.storageSizeList.length === 3) {
        this.disabledBtn = true
      }
    },
    del(index) {
      this.configForm.storageSizeList.splice(index, 1)
      this.disabledBtn = false
    }
  }
}
</script>

<style scoped>
  ul{
    margin: 0;
    padding: 0;
  }
  ul li{
    list-style: none;
  }
  .el-icon-circle-close:hover{
    color: dodgerblue;
  }
</style>
