import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.config.productionTip = false;
Vue.use(VueRouter)

import './styles/index.css';

import Home from './pages/Home.vue';
import Resume from './pages/Resume.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/resume', component: Resume }
  ]
});

new Vue({
  router
}).$mount('#app')
