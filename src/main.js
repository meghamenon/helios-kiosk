// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Home from './components/Home';
import User from './components/User';
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(VueRouter)

const routes = [

{
	path: '/' , component: Home
},

{
	path: '/user' , component: User
}

];

const router = new VueRouter ({
	routes,
	mode: 'history'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, 
  render: h => h(App)
});
