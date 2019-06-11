<template>
  <div class="main">
    <el-card class="box-card" style="margin:30px 50px" header="告警配置信息" shadow="hover">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="集群告警" name="1">
        <el-checkbox v-model="checked1" disabled>集群连通性异常</el-checkbox>
        <div style="margin-top: 10px">
          <el-checkbox v-model="checked1"></el-checkbox>
          集群CPU占用率持续
          <el-input v-model="input1" size="mini" style="width: 50px"  @blur="handleFilter"></el-input>
          分钟超过
          <el-input v-model="input2" size="mini" style="width: 50px"  @blur="handleFilter"></el-input>
          %
          <el-checkbox v-model="checked1" style="margin-left: 150px"></el-checkbox>
          集群内存占用率持续
          <el-input v-model="input1" size="mini" style="width: 50px"  @blur="handleFilter"></el-input>
          分钟超过
          <el-input v-model="input2" size="mini" style="width: 50px"  @blur="handleFilter"></el-input>
          %
        </div>
      </el-collapse-item>
      <el-collapse-item title="服务告警" name="2">
        <el-checkbox v-model="checked1" disabled>系统服务异常</el-checkbox>
        <div style="margin-top: 10px">
          <el-checkbox v-model="checked1"></el-checkbox>
          角色服务磁盘使用率持续
          <el-input v-model="input1" size="mini" style="width: 50px"  @blur="handleFilter"></el-input>
          分钟超过
          <el-input v-model="input3" size="mini" style="width: 50px"  @blur="handleFilter"></el-input>
          %
        </div>
      </el-collapse-item>
      <el-collapse-item title="主机告警" name="3">
        <el-checkbox v-model="checked1" disabled>主机连通性异常</el-checkbox>
        <div style="margin-top: 10px">
          <el-checkbox v-model="checked1"></el-checkbox>
          主机CPU占用率持续
          <el-input v-model="input1" size="mini" style="width: 50px"  @blur="handleFilter"></el-input>
          分钟超过
          <el-input v-model="input2" size="mini" style="width: 50px"  @blur="handleFilter"></el-input>
          %
          <el-checkbox v-model="checked1" style="margin-left: 150px"></el-checkbox>
          主机内存占用率持续
          <el-input v-model="input1" size="mini" style="width: 50px"  @blur="handleFilter"></el-input>
          分钟超过
          <el-input v-model="input2" size="mini" style="width: 50px"  @blur="handleFilter"></el-input>
          %
        </div>
      </el-collapse-item>
      <el-collapse-item title="授权告警" name="4">
        <div style="margin-top: 10px">
          <el-checkbox v-model="checked1"></el-checkbox>
          距离授权到期
          <el-input v-model="input4" size="mini" style="width: 50px"  @blur="handleFilter"></el-input>
          天
        </div>
      </el-collapse-item>
      <el-collapse-item title="存储告警" name="5">
        <el-checkbox v-model="checked1" disabled>存储连通性异常</el-checkbox>
        <div style="margin-top: 10px">
          <el-checkbox v-model="checked1"></el-checkbox>
          存储使用率超过
          <el-input v-model="input3" size="mini" style="width: 50px"  @blur="handleFilter"></el-input>
          %
        </div>
      </el-collapse-item>
      <el-collapse-item title="桌面告警" name="6">
        <div style="margin-top: 10px">
          <el-checkbox v-model="checked1"></el-checkbox>
          持续未注册超过
          <el-input v-model="input1" size="mini" style="width: 50px"  @blur="handleFilter"></el-input>
          分钟
        </div>
      </el-collapse-item>
    </el-collapse>
    </el-card>
    <el-button type="success" round style="margin-left: 50px">保存</el-button>
  </div>
</template>

<script>
export default {
  name: 'AlarmConfig',
  data() {
    return {
      activeNames: [''],
      checked1: true,
      input1: '5',
      input2: '93',
      input3: '90',
      input4: '7'
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    },
    handleFilter() {

    }
  }
}
</script>

<style scoped>
  .main {
    font-size: large;
  }
  .box-card {
    width: 1020px;
  }
</style>
