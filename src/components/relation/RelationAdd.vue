<template>
  <div class="manage-body">
    <div>
      <el-row style="background-color: #FFF;padding: 15px;">
        <el-col :span="12" style="text-align: left;font-size: larger;color: #409EFF;">
          <div>添加人员</div>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <div class="grid-content bg-purple">
            <router-link class="router-link" to="/Relation">回到列表</router-link>
          </div>
        </el-col>
      </el-row>
      <div style="background-color: #FFF;padding: 15px;">
        <el-form :model="HumanInfo" :rules="rules" ref="HumanInfo" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名称" prop="humanName">
            <el-input v-model="HumanInfo.humanName"/>
          </el-form-item>
          <!--<el-form-item label="性别" prop="sex">
            <el-input v-model="projectForm.sex"></el-input>
          </el-form-item>-->
          <el-form-item label="生日" prop="birthday">
            <el-date-picker
              v-model="HumanInfo.birthday"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="农历生日" prop="oldBirthday">
            <el-date-picker
              v-model="HumanInfo.oldBirthday"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <!--<el-form-item label="标签" prop="oldBirthday">
            <el-input v-model="HumanInfo.types"></el-input>
          </el-form-item>-->
          <el-form-item>
            <el-button type="primary" @click="submitForm('HumanInfo')">立即创建</el-button>
            <el-button @click="resetForm('HumanInfo')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "RelationAdd",
      methods: {
        addNewHumanRelation(){
          let pp = this;
          this.$axios.post('/dt/relation/addNewHumanRelation', pp.HumanInfo
          ).then((response) => {
            console.log(response);
            pp.openSuccess(response.data.msg);
            if(response.data.code === "10001"){
              this.$router.push('/Relation');
            }
          }).catch(err => {
            console.log(err);
            pp.openError();
          })
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {

              this.addNewHumanRelation();
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
            message: '人员[ '+this.HumanInfo.humanName + ' ],添加成功',
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
          HumanInfo:{
            humanName:'',
            birthday:'',
            oldBirthday:'',
            types:[],
          },
          rules: {
            humanName: [
              { required: true, message: '请输入项目名称', trigger: 'blur' },
              { min: 1, max: 30, message: '长度不得超过30个字符', trigger: 'blur' }
            ],
            birthday: [
              { required: true, message: '请填写农历', trigger: 'change' }
            ],
            oldBirthday: [
              { required: true, message: '请填写农历', trigger: 'change' }
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
