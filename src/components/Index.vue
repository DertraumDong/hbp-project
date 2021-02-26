<template>
<!--  <el-carousel indicator-position="outside">-->
<!--    <el-carousel-item v-for="(item , index) in list">-->
<!--      <div class="app-banner" :style="item"></div>-->
<!--    </el-carousel-item>-->
<!--  </el-carousel>-->
  <div class="index-body">
    <div class="card-body" v-for="(project,index) in projects">
      <div src="/" class="card-img"></div>
      <div class="project-info">
        <el-row>
          <el-col :span="16"><div class="grid-content bg-purple project-name string-long">{{project.name}}</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple project-view">{{ project.view }} views</div></el-col>
        </el-row>

      </div>
    </div>
    <div class="overflow"></div>
  </div>

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
      ],
      projects: [
        {
          "name": "小商场",
          "link": "/shoppingMall",
          "view": 10
        },
        {
          "name": "模拟大小商场",
          "link": "/shoppingMall",
          "view": 10
        },{
          "name": "如果名字特别特别长",
          "link": "/shoppingMall",
          "view": 10001454
        },{
          "name": "如果名字特别特别特别特别长",
          "link": "/shoppingMall",
          "view": 10002131454
        },

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
.index-body{
  height: 100%;
  text-align: center;
  margin: 0px 60px;
  padding-top: 10px;
}
.card-body{
  float: left;
  height: 300px;
  width: 300px;
  border: 1px solid #DCDFE6;
  margin: 10px;
}
.card-body:hover{
  box-shadow: 0 0 2px #909399 inset;
}

.card-img{
  height: 240px;
  width: 300px;
  background-color: #DCDFE6;
}
.overflow{
  clear: left;
}
.project-info{
  width: 100%;
  padding-top: 20px;
}
.string-long{
  display: block; /* 当前元素本身是inline的，因此需要设置成block模式 */
  white-space: nowrap; /* 因为设置了block，所以需要设置nowrap来确保不换行 */
  overflow: hidden; /* 超出隐藏结合width使用截取采用效果*/
  text-overflow: ellipsis; /* 本功能的主要功臣，超出部分的剪裁方式 */
  -o-text-overflow: ellipsis; /* 特定浏览器前缀 */
  text-decoration: none; /* 无用 */
}
.project-view{
  font-size: 10px;
}
.project-name{
  padding-left: 10px;
  text-align: left;
}
</style>
