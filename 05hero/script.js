Vue.createApp({
	data() {
		return {
			heroSelect: '',
			averngerSelect: [],
			myDynamic: '',
			myBonds: [
				{ text: 'James Bond', value: 7 },
				{ text: 'Jamey Bond', value: 8 },
				{ text: 'Rupam Bond', value: 9 },
			],
		};
	},
}).mount('#app');
