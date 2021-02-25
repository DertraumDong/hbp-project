<template>
  <div>
    <el-table
      :data="listData"
      style="width: 100%">
      <el-table-column
        type="index"
        label="索引"
        width="100">
      </el-table-column>
      <el-table-column
        prop="userId"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="humanId"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="humanName"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="humanName"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: "Relation",
  data() {
    return {
      showLogin: true,
      // def_act: '/A_VUE',
      msg: 'hello vue',
      user: '',
      homeContent: false,
      listData:[
        {
          "userId":'',
          "humanId":'',
          "humanName":''
        }
      ],
    }
  },
  mounted() {
    let pp = this;
    this.$axios.post('/dt/relation/queryHumanRelationPage',{}).then((response) => {
      console.log(response);
      pp.listData = response.data.data;
      console.log(pp.listData);
    }).catch(err => {
      console.log('err')
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>
