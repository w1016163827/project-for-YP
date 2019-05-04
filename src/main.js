import Vue from 'vue'
import App from './App'
import router from './router'
import './css/initialize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

import store from './store'

import utils from './utils'
const {center} = utils
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.directive('center',{
  inserted(el){
    center(el)
    window.addEventListener('resize',function () {
      center(el)
    })
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App),
  store
})
