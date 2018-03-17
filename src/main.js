import Vue from 'vue'
import App from './App.vue'

//引入外部 css
import './assets/bootstrap.css'
import './assets/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
