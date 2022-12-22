import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from './plugins/axios'
import store from './data/vuex';

Vue.config.productionTip = false

Vue.use(axios)

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
