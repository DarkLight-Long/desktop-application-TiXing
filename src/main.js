import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$notification = (title, body) => {
  /* eslint-disable */
  new Notification(title, { body })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
