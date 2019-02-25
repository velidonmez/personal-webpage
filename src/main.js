import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'
import i18n from '@/plugins/i18n'

import 'bootstrap'
import 'popper.js'
import './assets/app.scss'

window.$ = window.jQuery = jQuery
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
