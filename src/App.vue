<template>
  <div id="app">
    <template v-if="userInfo.id">
      <el-container>
        <el-aside v-l width="auto"><demo></demo></el-aside>
        <el-container>
          <el-header height="auto"><top></top></el-header>
          <el-main>
            <router-view></router-view></el-main>
        </el-container>
      </el-container>
    </template>
    <login v-else></login>
  </div>
</template>

<style scoped>
  ::-webkit-scrollbar{display: none}
</style>

<script>
import demo from "./components/demo.vue"
import top from "./components/top.vue"
import login from './components/login'
import {mapState} from 'vuex'
export default {
  components:{
    demo,
    top,
    login
  },
  directives:{
            l:{
                inserted(el){
                let height = `${document.documentElement.clientHeight}`
                el.style.height = height+"px"
                window.onresize=function(){
                let height = `${document.documentElement.clientHeight}`
                el.style.height = height+"px"
                }
                }
            }
        },
  computed:{
    ...mapState(['userInfo'])
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  color: #2c3e50;
}
html,body{
width: 100%;
  height: 100%;
}
.el-container{
  height: 100%;
}
.el-header{
  padding: 0;
}
.el-main{
  padding: 20px 15px 0;
  background: #f5f5f5;
}
</style>
