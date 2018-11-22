import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import axios from 'axios'

import _ from 'lodash'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.prototype.$http = axios

var config = {
  apiKey: "AIzaSyAC67bytXN8ZT7P2Gr2t19HFPqtUec0OXk",
  authDomain: "vue-api-project.firebaseapp.com",
  databaseURL: "https://vue-api-project.firebaseio.com",
  projectId: "vue-api-project",
  storageBucket: "vue-api-project.appspot.com",
  messagingSenderId: "770926329084"
}
firebase.initializeApp(config)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')