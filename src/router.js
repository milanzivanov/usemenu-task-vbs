import Vue from 'vue';
import Router from 'vue-router';
import Add from './components/Add.vue';
import Edit from './components/Edit.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    }
  ]
})
