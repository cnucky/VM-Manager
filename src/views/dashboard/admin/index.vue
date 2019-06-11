<template>
  <div class="dashboard-editor-container">

    <el-row :gutter="32" style="padding:16px 16px 0;">
      <el-col :span="24">
        <el-card class="box-card" :body-style="{ padding:0, backgroundColor: 'rgb(240, 242, 245)'}">
          <div slot="header" class="clearfix">
            <span>监控告警</span>
          </div>
          <el-row :gutter="32">
            <el-col :span="12">
              <el-card :body-style="{ textAlign:'center'}">
                <span>系统服务</span>
                <div class="system_server">
                  <div class="system_server_unnormal">
                    <router-link class="number" to="/system/baseServerManager">0</router-link>
                    <span class="text">异常</span>
                  </div>

                  <div class="system_server_normal">
                    <router-link class="number" to="/system/baseServerManager">4</router-link>
                    <span class="text">正常</span>
                  </div>
                </div>
              </el-card>
            </el-col>

            <el-col :span="12">
              <el-card :body-style="{textAlign:'center'}">
                <span>桌面状态</span>
                <div class="system_server">
                  <div class="system_server_unnormal">
                    <router-link class="number" to="/desktop/desktopGroupManager">0</router-link>
                    <span class="text">已启动(未注册)</span>
                  </div>

                  <div class="system_server_normal">
                    <router-link class="number" to="/desktop/desktopGroupManager">6</router-link>
                    <span class="text">总数</span>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="32" style="padding:16px 16px 0;">
      <el-col :span="16">
        <el-card :body-style="{ padding: '20px'}">
          <div slot="header" class="clearfix">
            <span>计算资源</span>
          </div>
          <el-row>
            <el-col :span="12" align="center" style="position: relative">
              <span style="position: absolute;top: 0;left: 0;">CPU使用率</span>
              <router-link to="/compute/hostManager">
                <el-progress :stroke-width="10" type="circle" :percentage="CPU" :color="CPU > 80 ? 'red':'#67c23a'" style="margin-top: 20px" />
              </router-link>
            </el-col>
            <el-col :span="12" align="center" style="position: relative">
              <span style="position: absolute;top: 0;left: 0;">内存使用率</span>
              <router-link to="/compute/hostManager">
                <el-progress :stroke-width="10" type="circle" :percentage="Memory" :color="Memory > 80 ? 'red':'#67c23a'" style="margin-top: 20px" />
              </router-link>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card :body-style="{ padding: '20px'}">
          <div slot="header" class="clearfix">
            <span>存储资源</span>
          </div>
          <el-row>
            <el-col :span="24" align="center" style="position: relative">
              <span style="position: absolute;top: 0;left: 0;">存储使用率</span>
              <router-link to="/storage/storageManager">
                <el-progress :stroke-width="10" type="circle" :percentage="Storage" :color="Storage > 80 ? 'red':'#67c23a'" style="margin-top: 20px" />
              </router-link>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="32" style="padding:16px 16px 0;">
      <el-col :span="12">
        <el-card class="box-card" style="height: 400px">
          <div slot="header" class="clearfix">
            <span>在线用户数</span>
          </div>
          <BarChart />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card" style="height: 400px">
          <div slot="header" class="clearfix">
            <span>告警日志</span>
          </div>
          <el-table
            :data="alarmLog"
            border
            :header-cell-style="{background: '#F2F2F2'}"
          >
            <el-table-column
              prop="log"
              label="告警日志"
              align="center"
            />
          </el-table>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import waves from '@/directive/waves/index.js'
import BarChart from './components/BarChart'
export default {
  name: 'DashboardAdmin',
  components: {
    BarChart
  },
  directives: {
    waves
  },
  data() {
    return {
      CPU: 80,
      Memory: 40,
      Storage: 82,
      alarmLog: []
    }
  },
  mounted() {
    const progress = Array.from(document.getElementsByClassName('el-progress__text'))
    progress.forEach((p) => {
      p.style.fontSize = '30px'
    })
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  margin: 0;
  padding-bottom: 16px;
  background-color: rgb(240, 242, 245);
  position: relative;
}

//监控告警
.system_server{
  display: flex;
  justify-content: space-around;
}
.system_server_unnormal{
  display: flex;
  flex-flow: column;
  .number{
    font-size: 3rem;
    margin-bottom: 5px;
    color: red;
  }
}
.number:hover{
  text-decoration: underline;
}
.system_server_normal{
  display: flex;
  flex-flow: column;
  .number{
    font-size: 3rem;
    margin-bottom: 5px;
  }
}

</style>
