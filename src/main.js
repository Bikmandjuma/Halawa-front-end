import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Axios from 'axios'

Axios.defaults.headers.common['Authorization'] = 'Bearer ${token}';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  Axios,
  render: h => h(App)
}).$mount('#app')
