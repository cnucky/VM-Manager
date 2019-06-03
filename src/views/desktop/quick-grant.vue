<template>
  <el-container>
    <el-header>
      <el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
        <el-step title="创建桌面组" ></el-step>
        <el-step title="配置桌面" ></el-step>
        <el-step title="分配用户" ></el-step>
        <el-step title="确认信息" ></el-step>
      </el-steps>
    </el-header>
    <el-main>
      <!--创建桌面组-->
      <CreateDesktop v-show="active === 0" :active="active" @getChildActive="getActive"></CreateDesktop>
      <!--配置桌面-->
      <ConfigDesktop v-show="active === 1" :active="active" @getChildActive="getActive"></ConfigDesktop>
      <!--分配用户-->
      <AssignUsers v-show="active === 2" :active="active" @getChildActive="getActive"></AssignUsers>
      <!--确认信息-->
      <ConfirmInformation v-show="active === 3" :active="active" @getChildActive="getActive"></ConfirmInformation>
    </el-main>
  </el-container>
</template>

<script>
import CreateDesktop from './components/create-desktop'
import ConfigDesktop from './components/config-desktop'
import AssignUsers from './components/assign-uesrs'
import ConfirmInformation from './components/confirm-information'
export default {
  name: "quick-grant",
  components:{
    CreateDesktop,
    ConfigDesktop,
    AssignUsers,
    ConfirmInformation
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    getActive(active){
      this.active = active
    }
  },

}
</script>

<style scoped>

</style>
