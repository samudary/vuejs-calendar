import Vue from 'vue';
import './style.scss';
import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

// Moment as an instance method
// This as well as setting it in the data object allow all components to access the library
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });
import App from './components/App.vue';

new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  }
});
