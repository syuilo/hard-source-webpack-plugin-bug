import Vue from 'vue';
import App from './app.vue';

new Vue({
	render: createEl => createEl(App)
}).$mount('#app');
