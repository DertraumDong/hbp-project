<template>
  <div class="manage-body">
    <div >
      <el-row style="background-color: #FFF;padding: 15px;">
        <el-col :span="12" style="text-align: left;font-size: larger;color: #409EFF;">
          <div>管理中心</div>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <div class="grid-content bg-purple">
            <router-link class="router-link" to="/addManage"><el-button type="primary" icon="el-icon-plus" circle></el-button></router-link>

          </div>
        </el-col>
      </el-row>
      <el-table
        :data="listData"
        v-loading="loading"
        border
        style="width: 100%;">
        <el-table-column
          type="index"
          label=""
          width="60">
        </el-table-column>
        <el-table-column
          prop="name"
          label="项目名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="link"
          label="链接"
          width="180">
        </el-table-column>
        <el-table-column
          prop="author"
          label="作者"
          width="160">
        </el-table-column>
        <el-table-column
          prop="introduce"
          label="介绍">
        </el-table-column>
        <el-table-column
          prop="creationDate"
          label="创建时间">
        </el-table-column>
        <el-table-column
          prop="modifyDate"
          label="最近修改时间">
        </el-table-column>
        <el-table-column
          prop="version"
          label="修改次数"
          width="100">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="small">编辑</el-button>
            <el-button @click="deleteProject(scope.row)" type="danger" size="small" icon="el-icon-delete-solid">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block" style="background-color: #FFF;padding: 15px;text-align: right">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNumber.pageNo"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="pageNumber.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageNumber.totalCount">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Manage",
      methods: {
        initData(){
          let pp = this;
          let projectQuery = {};
          projectQuery.pageNo=this.pageNumber.pageNo;
          projectQuery.pageSize=this.pageNumber.pageSize;
          this.$axios.post('/dt/project/queryProject', projectQuery
          ).then((response) => {
            console.log(response);
            let data = response.data.data
            pp.listData = data.records;
            console.log(response.data.data);
            pp.pageNumber.pageNo=data.current;
            pp.pageNumber.pageSize=data.size;
            pp.pageNumber.totalCount=data.total;
            this.loading=false;
          }).catch(err => {
            console.log('err');
            console.log(err);
            this.loading=false;
          })

        },
        deleteProject(data){
          let pp = this;
          let project ={};
          project.id= data.id;
          this.$axios.post('/dt/project/deleteProject', project
          ).then((response) => {
            console.log(response);
            let data = response.data;
            if(data.code === '10001'){
              pp.openSuccess();
              pp.initData();
            }else{
              pp.openError();
            }
          }).catch(err => {
            console.log('err');
            console.log(err);
          })
        },
        handleSizeChange(data) {
          // 点击页面数量的时候
          this.pageNumber.pageSize=data;
          this.initData(this.pageNumber.pageNo,this.pageNumber.pageSize);
        },
        handleCurrentChange(data){
          // 点击分页的时候
          this.pageNumber.pageNo=data;
          this.initData(this.pageNumber.pageNo,this.pageNumber.pageSize);
        },
        openSuccess() {
          this.$notify({
            title: '成功',
            message: '删除成功',
            type: 'success'
          });
        },
        openError() {
          this.$notify.error({
            title: '错误',
            message: '删除失败'
          });
        },
      },
      data() {
        return {
          pageNumber:{
            pageNo:1,
            pageSize:10,
            totalCount:10
          },
          loading: true,
          listData:[
            {

            }
          ],
        }
      },
      mounted() {
        this.initData();
      }
    }
</script>

<style scoped>
.manage-body{
  padding: 20px 60px;
}
body {
  margin: 0;
}
</style>
