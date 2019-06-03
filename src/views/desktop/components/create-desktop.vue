<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
    label-position="right">
    <el-form-item label="桌面组类型" prop="type">
      <el-select v-model="ruleForm.type" placeholder="请选择桌面类型">
        <el-option label="随机池" value="suiji"></el-option>
        <el-option label="静态池" value="jingtai"></el-option>
        <el-option label="标准桌面" value="biaozhun"></el-option>
        <el-option label="3D桌面" value="3d"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="桌面组名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item label="桌面组描述" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>

    <el-form-item label="集群" prop="colony">
      <el-select v-model="ruleForm.colony" placeholder="请选择集群">
        <el-option label="New Pool" value="newpool"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="选择镜像" prop="mirror" >
      <div>
        <el-input placeholder="请选择输入搜索关键词" v-model="ruleForm.mirror">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>

        <el-table
          :data="mirrorList"
          height="100"
          border
          style="margin-top: 15px;width: 100%">
          <el-table-column
            prop="mirror"
            label="可选镜像"
            align="center">
          </el-table-column>

        </el-table>
      </div>
    </el-form-item>

    <el-form-item label="网络" prop="network">
      <el-select v-model="ruleForm.network" placeholder="请选择网络">
        <el-option label="BusinessNetwork" value="Business"></el-option>
        <el-option label="Bond 1+3" value="bond"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="next()">下一步</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "create-desktop",
  props:["active"],
  data() {
    return {
      search:'',
      mirrorList: [],
      ruleForm: {
        type: '',
        name: '',
        desc: '',
        colony: '',
        mirror: '',
        network: ''
      },
      rules: {
        type: [
          { required: true, message: '请选择桌面类型', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入桌面组名称', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'change' }
        ],
        colony: [
          { required: true, message: '请选择集群', trigger: 'change' }
        ],
        mirror: [
          { required: true, message: '请选择镜像', trigger: 'change' }
        ],
        network: [
          { required: true, message: '请选择网络', trigger: 'change' }
        ]
      }
    };
  },
  methods: {
    next() {
      this.$emit('getChildActive',1)
    }
  }
}
</script>

<style scoped>

</style>
