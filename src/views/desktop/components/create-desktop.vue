<template>
  <el-col :span="12">
    <el-form
      ref="createForm"
      :model="createForm"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
      label-position="left"
    >
      <el-form-item label="桌面组类型" prop="type">
        <el-select v-model="createForm.type" placeholder="请选择桌面类型">
          <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>

      <el-form-item label="桌面组名称" prop="name">
        <el-input v-model="createForm.name"/>
      </el-form-item>

      <el-form-item label="桌面组描述" prop="description">
        <el-input v-model="createForm.description" type="textarea"/>
      </el-form-item>

      <el-form-item label="集群" prop="clusterId">
        <el-select v-model="createForm.clusterId" placeholder="请选择集群">
          <el-option label="New Pool" value="New Pool" />
        </el-select>
      </el-form-item>

      <el-form-item label="选择镜像" prop="imageId">
        <div>
          <el-input v-model="createForm.imageId" placeholder="请选择输入搜索关键词">
            <el-button slot="append" icon="el-icon-search" />
          </el-input>

          <el-table
            :data="mirrorList"
            border
            style="margin-top: 15px"
          >
            <el-table-column
              prop="mirror"
              label="可选镜像"
              align="center"
            />

          </el-table>
        </div>
      </el-form-item>

      <el-form-item label="网络" prop="networkId">
        <el-select v-model="createForm.networkId" placeholder="请选择网络">
          <el-option label="BusinessNetwork" value="BusinessNetwork" />
          <el-option label="Bond 1+3" value="Bond 1+3" />
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="next('createForm')">下一步</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>

<script>
export default {
  name: 'CreateDesktop',
  props: [],
  data() {
    return {
      typeOptions:[
        {value:'random_pool', label:'随机池'},
        {value:'static_pool', label:'静态池'},
        {value:'biaozhun', label:'标准桌面'},
        {value:'3d', label:'3D桌面'},
      ],
      search: '',
      mirrorList: [],
      createForm: {
        type: 'random_pool',
        name: '',
        description: '',
        clusterId: 'New Pool',
        imageId: '',
        networkId: 'BusinessNetwork'
      },
      rules: {
        type: [
          { required: true, message: '请选择桌面类型', trigger: 'change' },
        ],
        name: [
          { required: true, message: '请输入桌面组名称', trigger: 'blur' },
          // { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'change' }
        ],
        clusterId: [
          { required: true, message: '请选择集群', trigger: 'change' }
        ],
        imageId: [
          { required: true, message: '请选择镜像', trigger: 'change' }
        ],
        networkId: [
          { required: true, message: '请选择网络', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    next(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('getChildInfo', 1, this.createForm)
        } else {
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
