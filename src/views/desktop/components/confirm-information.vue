<template>
  <!--<p>111</p>-->
  <el-col :span="12">
  <el-form
    label-position="left"
    label-width="120px">
    <el-form-item label="桌面组类型">
      <el-input v-model="type" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="桌面组名称">
      <el-input v-model="desktopForm.name" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="桌面组描述">
      <el-input v-model="desktopForm.description" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="镜像名称">
      <el-input v-model="desktopForm.imageId" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="桌面组命名规则">
      <el-input v-model="desktopForm.nameRule" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="桌面最大连接数">
      <el-input v-model="desktopForm.desktopMaxConnect" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="桌面数量">
      <el-input v-model="desktopForm.desktopNumber" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="所属组织">
      <el-input v-model="desktopForm.ou" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="CPU(核)">
      <el-input v-model="desktopForm.cpu" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="内存(GB)">
      <el-input v-model="desktopForm.memory" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="集群">
      <el-input v-model="desktopForm.clusterId" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="网络">
      <el-input v-model="desktopForm.networkId" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="磁盘配置">
      <span>系统盘位置: </span><el-input v-model="desktopForm.systemLocation" :disabled="true" style="width: 76%; margin-bottom: 10px"></el-input>
      <br>
      <span v-if="desktopForm.storageSizeList.length">用户盘位置: </span><el-input v-model="desktopForm.userLocation" v-if="desktopForm.storageSizeList.length" :disabled="true" style="width: 76%"></el-input>

      <el-row v-for="(item,index) in desktopForm.storageSizeList" :key="index">
        <span>用户磁盘: {{item}} GB</span>
      </el-row>
    </el-form-item>

    <el-form-item label="用户">
      <el-input v-model="userList" :disabled="true"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button @click="previous()">上一步</el-button>
      <el-button type="primary" @click="commit()" v-loading.fullscreen.lock="fullscreenLoading">确认提交</el-button>
    </el-form-item>
  </el-form>
  </el-col>
</template>

<script>
export default {
  name: 'ConfirmInformation',
  props: ['desktopForm'],
  data() {
    return {
      typeOptions:[
        {value:'random_pool', label:'随机池'},
        {value:'static_pool', label:'静态池'},
        {value:'biaozhun', label:'标准桌面'},
        {value:'3d', label:'3D桌面'},
      ],
      type: '',
      userList: '',
      fullscreenLoading: false
    }
  },
  mounted() {
    let type = this.typeOptions.find((item)=>{
      return item.value === this.desktopForm.type
    })
    if (type){
      this.type = type.label
    }

    this.userList = this.desktopForm.userList.toString()
  },
  methods: {
    previous() {
      this.$emit('getChildInfo', 2)
    },
    commit() {
      this.$emit('getChildInfo', 4)
      // 发送Ajax请求提交表单
      //

      //成功后提示信息并跳转界面
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
        this.$message({
          type: 'success',
          message: '成功'
        });
        this.$router.push('/desktop/desktopGroupManager')
      }, 1000);

    }
  }
}
</script>

<style scoped>

</style>
