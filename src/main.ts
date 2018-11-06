import Vue from 'vue';
import ToggleButton from 'vue-js-toggle-button';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(ToggleButton);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
