import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import 'common/stylus/index.styl';
/*
* 挂载 VueRouter VueResource 插件
* */
Vue.use(VueRouter);
Vue.use(VueResource);
let app = Vue.extend(App);
let router = new VueRouter({
  linkActiveClass: 'active'
});

router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
});
router.start(app, '#app');
router.go('/goods');
/* eslint-disable no-new */
/* new Vue({
  el: 'body',
  components: { App }
});
*/
