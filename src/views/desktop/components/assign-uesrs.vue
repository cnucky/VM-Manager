<template>
  <el-form>
    <p>分配用户</p>
    <el-button @click="previous()">上一步</el-button>
    <el-button type="primary" @click="next()">下一步</el-button>
  </el-form>
</template>

<script>
export default {
  name: "assign-uesrs",
  props: ["active"],
  methods: {
    previous(){
      this.$emit('getChildActive',1)
    },
    next(){
      this.$emit('getChildActive',3)
    }
  }
}
</script>

<style scoped>

</style>
