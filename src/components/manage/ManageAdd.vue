<template>
  <div class="manage-body">
    <div>
      <el-row style="background-color: #FFF;padding: 15px;">
        <el-col :span="12" style="text-align: left;font-size: larger;color: #409EFF;">
          <div>添加项目</div>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <div class="grid-content bg-purple">
            <router-link class="router-link" to="/Manage">回到列表</router-link>
          </div>
        </el-col>
      </el-row>
      <div style="background-color: #FFF;padding: 15px;">
        <el-form :model="projectForm" :rules="rules" ref="projectForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="项目名称" prop="name">
            <el-input v-model="projectForm.name"></el-input>
          </el-form-item>
          <el-form-item label="链接" prop="link">
            <el-input v-model="projectForm.link"></el-input>
          </el-form-item>
          <el-form-item label="介绍" prop="introduce">
            <el-input type="textarea" v-model="projectForm.introduce"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('projectForm')">立即创建</el-button>
            <el-button @click="resetForm('projectForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Manage",
      methods: {
        addProject(){
          let pp = this;
          this.$axios.post('/dt/project/addProject', pp.projectForm
          ).then((response) => {
            console.log(response);
            pp.openSuccess(response.data.msg);
            if(response.data.code === "10001"){
              this.$router.push('/Manage');
            }
          }).catch(err => {
            console.log(err);
            pp.openError();
          })
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {

              this.addProject();
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName){
          this.$refs[formName].resetFields();
        },
        openSuccess() {
          this.$notify({
            title: '成功',
            message: '项目[ '+this.projectForm.name + ' ],添加成功',
            type: 'success'
          });
        },
        openError() {
          this.$notify.error({
            title: '错误',
            message: '提交失败'
          });
        },
      },
      data() {
        return {
          projectForm:{
            name:"",
            link:"",
            introduce:""

          },
          rules: {
            name: [
              { required: true, message: '请输入项目名称', trigger: 'blur' },
              { min: 1, max: 30, message: '长度不得超过30个字符', trigger: 'blur' }
            ],
            link: [
              { required: true, message: '请填写链接', trigger: 'change' }
            ],
            introduce: [
              { required: true, message: '请填写介绍', trigger: 'blur' }
            ]
          }
        }
      },
      mounted() {
      }
    }
</script>

<style scoped>
.manage-body{
  padding: 20px 60px;
}
</style>
