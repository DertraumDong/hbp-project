<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="(item , index) in list">
      <div class="app-banner" :style="item"></div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      list: [
        "background-color: #409EFF",
        "background-color: #42b982",
        "background-color: #E6A23C",
        "background-color: #F56C6C",
      ]
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.app-banner{
  height: 300px;
  width: 100%;
  padding: 10px;
}
</style>
