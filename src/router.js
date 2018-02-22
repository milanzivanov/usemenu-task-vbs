import Vue from 'vue';
import Router from 'vue-router';
// import App from './components/App.vue';
import Add from './components/Add.vue';
// import Edit from './components/Edit.vue';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'app',
    //   component: App
    // },
    {
      path: '/add',
      name: 'add',
      component: Add
    }
  ]
})
