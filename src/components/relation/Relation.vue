<template>
  <div>
    <el-row style="background-color: #FFF;padding: 15px;">
      <el-col :span="12" style="text-align: left;font-size: larger;color: #409EFF;">
        <div>人员关系维护系统</div>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <div class="grid-content bg-purple">
          <router-link class="router-link" to="/addRelation"><el-button type="primary" icon="el-icon-plus" circle></el-button></router-link>

        </div>
      </el-col>
    </el-row>
    <el-table
      :data="listData"
      style="width: 100%">
      <el-table-column
        type="index"
        label=""
        width="100">
      </el-table-column>
      <el-table-column
        prop="userId"
        label="创建人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="types"
        label="人员类型"
        width="180">
      </el-table-column>
      <el-table-column
        prop="humanId"
        label="人员id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="humanName"
        label="人员姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="birthday"
        label="生日">
      </el-table-column>
      <el-table-column
        prop="oldBirthday"
        label="农历生日">
      </el-table-column>
      <el-table-column
        prop="oldBirthday"
        label="创建时间">
      </el-table-column>

    </el-table>
    <div class="block" style="background-color: #FFF;padding: 15px;text-align: right">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNumber.pageNo"
        :page-sizes="[3, 20, 50, 100]"
        :page-size="pageNumber.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageNumber.totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>

export default {
  name: "Relation",
  data() {
    return {
      listData:[],
      pageNumber:{
        pageNo:1,
        pageSize:3,
        totalCount:10
      },
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData(){
      let pp = this;
      let pageQuery ={};
      pageQuery.pageNo = this.pageNumber.pageNo;
      pageQuery.pageSize = this.pageNumber.pageSize;
      this.$axios.post('/dt/relation/queryHumanRelationPage',pageQuery).then((response) => {
        console.log(response);
        let data = response.data.data;
        pp.listData = data.records;
        pp.pageNumber.pageNo=data.current;
        pp.pageNumber.pageSize=data.size;
        pp.pageNumber.totalCount=data.total;
        this.loading=false;
      }).catch(err => {
        console.log('err')
        console.log(err)
        this.loading=false;
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
  }
}
</script>

<style scoped>

</style>
