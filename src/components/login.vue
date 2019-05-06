<template>
  <div>
    <!--登录-->
    <div class="login" v-center v-if="isLogin">
      <el-form ref="form"
               :model="form"
               label-width="80px"
               label-position="top"
      >
        <h3>登录</h3>
        <el-form-item >
          <el-input v-model="form.userName" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item >
          <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="login-button">
          <el-row>
            <el-col :span="18" :offset="3">
              <el-button type="primary" @click="submit" class="login-button">登录</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item class="login-button">
          <el-row>
            <el-col :span="18" :offset="3">
              <el-button type="primary" @click="isLogin=!isLogin" class="login-button">注册</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
    <!--注册-->
    <div class="login" v-center v-else>
      <el-form ref="form"
               :model="form"
               label-width="80px"
               label-position="top"
      >
        <h3>注册</h3>
        <el-form-item>
          <el-input v-model="form.userName" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item >
          <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="login-button">
          <el-row>
            <el-col :span="18" :offset="3">
              <el-button type="primary"
                         class="login-button"
                         @click="isLogin=!isLogin"
              >返回登录页面</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item class="login-button">
          <el-row>
            <el-col :span="18" :offset="3">
              <el-button type="primary"
                         class="login-button"
                         @click="register"
              >提交</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        form:{
          userName:'',
          password:''
        },
        isLogin:true
      }
    },
    methods: {
      ...mapActions(['login']),
      submit() {
        this.login({name:this.form.userName,password:this.form.password})
      },
      register(){

      }
    }
  }
</script>

<style>
.login{
  width: 500px;
  height: 400px;
  box-shadow: gray 0 0 25px;
  padding: 40px;
  box-sizing: border-box;
}
h3{
  text-align: center;
  margin: 0 auto 40px;

}
.login-button{
  width: 100%;
}
</style>
