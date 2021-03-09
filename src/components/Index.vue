<template>
  <div class="index-body">
    <div class="container">
      <h1 class="jumbotron-heading">DerTraum的奇思妙想</h1>
      <p></p>
      <p>
        <a href="https://github.com/DertraumDong" target="_blank" class="text-white"><img src="https://img.icons8.com/wired/50/000000/github.png"/></a>
        <a href="https://blog.csdn.net/liudong220" target="_blank" class="text-white"><img src="https://img.icons8.com/material-sharp/50/000000/csdn.png"/></a>
      </p>
    </div>
    <el-row>
      <el-col :span="6" v-for="(project, index) in projects" style="margin-bottom: 40px;" v-loading="loading">
        <router-link to="" class="router-link" @click.native="clickProject(project)" >
          <el-card shadow="hover" :body-style="{ padding: '0px 0px 30px 0px' }">
            <img class="card-img"/>
            <div>
              <el-row>
                <el-tooltip class="item" effect="dark" :content=project.name placement="bottom-start">
                  <el-col :span="16"><div class="grid-content bg-purple project-name string-long">{{project.name}}</div></el-col>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" :content=project.view placement="bottom">
                  <el-col :span="8"><div class="grid-content bg-purple project-view string-long"><i class="el-icon-user-solid"></i>{{ project.view }}</div></el-col>
                </el-tooltip>
              </el-row>
            </div>
          </el-card>
        </router-link>
      </el-col>
    </el-row>
    <el-row v-if="iconFlag===true"><i @click="load" class="el-icon-refresh" style="cursor: pointer;">点击记载更多</i></el-row>
    <el-row v-if="iconFlag===false">加载到底部拉～</el-row>
  </div>


  <!--<div class="index-body">
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
  </div>-->

</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      pageNumber: {
        pageNo: 1,
        pageSize: 8,
        totalCount: 10
      },
      projects:[],
      loading: true,
      iconFlag:true,
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      let pp = this;
      let projectQuery = {};
      projectQuery.pageNo = this.pageNumber.pageNo;
      projectQuery.pageSize = this.pageNumber.pageSize;
      this.$axios.post('/dt/project/queryProject', projectQuery
      ).then((response) => {
        console.log(response);
        let data = response.data.data
        pp.projects = data.records;
        pp.pageNumber.pageNo = data.current;
        pp.pageNumber.pageSize = data.size;
        pp.pageNumber.totalCount = data.total;
        pp.loading=false;

        pp.viewLoad();
      }).catch(err => {
        console.log('err');
        console.log(err);
        pp.loading=false;
      })
    },
    load(){
      this.pageNumber.pageSize += 8;
      this.initData();
      if(this.pageNumber.pageSize > this.pageNumber.totalCount){
        this.iconFlag = false;
      }
    },
    viewLoad(){
      let $thisP = this;
      this.$axios.get('/dt/projectView/queryProjectView',
      ).then((response) => {
        let data = response.data.data;
        console.log(data);
        for(let i =0; i < $thisP.projects.length; i++){
          let id = $thisP.projects[i].id;
          let views = data[id];
          $thisP.projects[i].view = views;
        }
      }).catch(err => {
        console.log('err');
        console.log(err);
      })
    },
    clickProject(project){
      let id = project.id;
      let link = project.link;
      this.$axios.get('/dt/projectView/visitProject/'+id,
      ).then((response) => {
        console.log(response);
      }).catch(err => {
        console.log('err',err);
      })
      this.$router.push(link);
    }
  }
}
</script>

<style scoped>
.index-body{
  text-align: center;
  height: 100%;
  text-align: center;
  margin: 0px 280px;
  padding-top: 10px;
}

.card-img{
  height: 300px;
  width: 100%;
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
