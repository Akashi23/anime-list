import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import LazyLoadDirective from './custom-directives/lazy-loading'


Vue.config.productionTip = false;

Vue.directive("lazyload", LazyLoadDirective);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
