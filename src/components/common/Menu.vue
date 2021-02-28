<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-demo"
    router
    mode="horizontal"
    @select="handleSelect">
    <el-menu-item index="/">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">项目中心</template>
      <el-menu-item index="2-1">金融小项目</el-menu-item>
      <el-menu-item index="2-2">小商场</el-menu-item>
      <el-menu-item index="2-3">面试系统</el-menu-item>
      <el-menu-item index="/Relation"><router-link class="router-link" to="/Relation">用户维护系统</router-link></el-menu-item>
    </el-submenu>
    <el-menu-item index="3" disabled>基础平台</el-menu-item>
    <el-submenu index="4">
      <template slot="title">外部链接</template>
      <el-submenu index="4-1">
        <template slot="title">外部链接</template>
        <el-menu-item index=""><a href="https://github.com/DertraumDong" target="_blank">Github</a></el-menu-item>
        <el-menu-item index=""><a href="https://blog.csdn.net/liudong220" target="_blank">CSDN</a></el-menu-item>
        <el-menu-item index=""><a href="https://leetcode-cn.com/" target="_blank">leeCode</a></el-menu-item>
      </el-submenu>
      <el-menu-item index="4-2">朴茨茅斯</el-menu-item>
    </el-submenu>
    <el-menu-item index="/manage">管理中心</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Common",
  data() {
    return {
      msg: 'hello vue',
      activeIndex: "1"
    }
  },
  mounted() {

  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key;
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration:none
  }
  .router-link-active {
    text-decoration: none;
    color: #909399;
  }
</style>
