import 'Styles/main.scss';
import Vue from 'vue';
import store from './store'
import router from './router'
import App from 'Components/App.vue';

new Vue({
  store,
  router,
  render: createElement => createElement(App),
  el: '#app'
});
