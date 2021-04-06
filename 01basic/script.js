const app = {
	data() {
		return {
			name: 'Shil',
		};
	},
};

Vue.createApp(app).mount('#app');

Vue.createApp({
	data() {
		return {
			name: 'Dey',
		};
	},
}).mount('#apptwo');
