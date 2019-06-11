<template>
  <el-container>
    <el-header>
      <el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
        <el-step title="创建桌面组" />
        <el-step title="配置桌面" />
        <el-step title="分配用户" />
        <el-step title="确认信息" />
      </el-steps>
    </el-header>
    <el-main>
      <!--创建桌面组-->
      <CreateDesktop v-show="active === 0" @getChildInfo="getCreateInfo" />
      <!--配置桌面-->
      <ConfigDesktop v-show="active === 1" @getChildInfo="getConfigInfo" />
      <!--分配用户-->
      <AssignUsers v-show="active === 2" @getChildInfo="getAssignInfo" @mergeForm="mergeForm" :configForm="configForm"/>
      <!--确认信息-->
      <ConfirmInformation v-if="active >= 3" @getChildInfo="mergeForm" :desktopForm="desktopForm"/>
    </el-main>
  </el-container>
</template>

<script>
import CreateDesktop from './components/create-desktop'
import ConfigDesktop from './components/config-desktop'
import AssignUsers from './components/assign-uesrs'
import ConfirmInformation from './components/confirm-information'
export default {
  name: 'QuickGrant',
  components: {
    CreateDesktop,
    ConfigDesktop,
    AssignUsers,
    ConfirmInformation
  },
  data() {
    return {
      active: 0,
      createForm: {},
      configForm: {},
      assignForm: {},
      desktopForm: {}
    }
  },
  methods: {
    getCreateInfo(active,formInfo) {
      this.active = active
      this.createForm = formInfo
      // console.log(this.createForm)
    },
    getConfigInfo(active,formInfo) {
      this.active = active
      this.configForm = formInfo
      // console.log(this.configForm)
    },
    getAssignInfo(active,formInfo) {
      this.active = active
      this.assignForm = formInfo
      // console.log(this.assignForm)
    },
    mergeForm(active) {
      this.active = active
      //合并表单对象后提交
      this.desktopForm = {}
      Object.assign(this.desktopForm,this.createForm,this.configForm,this.assignForm)
    }
  }

}
</script>

<style scoped>
  .el-main{
    margin-top: 2%;
    padding-left: 5%;
  }
</style>
