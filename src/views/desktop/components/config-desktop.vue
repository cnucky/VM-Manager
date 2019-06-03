<template>
  <el-form>
    <p>配置桌面</p>
    <el-button @click="previous()">上一步</el-button>
    <el-button type="primary" @click="next()">下一步</el-button>
  </el-form>
</template>

<script>
export default {
  name: "config-desktop",
  props:["active"],
  methods: {
    previous(){
      this.$emit('getChildActive',0)
    },
    next(){
      this.$emit('getChildActive',2)
    }
  }
}
</script>

<style scoped>

</style>
