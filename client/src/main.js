// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource)
=======

Vue.config.productionTip = false
>>>>>>> f06b1f46c3345e4723918d9c61b76999c1afdfd5

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
