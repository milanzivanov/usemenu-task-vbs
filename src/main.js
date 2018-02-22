import Vue from 'vue';
import App from './App.vue';
import Add from './components/Add.vue';
import router from './router';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
