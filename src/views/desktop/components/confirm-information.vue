<template>
  <el-form>
    <p>确认信息</p>
    <el-button @click="previous()">上一步</el-button>
    <el-button type="primary" @click="next()">确认提交</el-button>
  </el-form>
</template>

<script>
export default {
  name: "confirm-information",
  props: ["active"],
    methods: {
    previous(){
      this.$emit('getChildActive',2)
    },
    next(){
      this.$emit('getChildActive',4)
    }
  }
}
</script>

<style scoped>

</style>
