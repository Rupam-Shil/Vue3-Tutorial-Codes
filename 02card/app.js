const app = Vue.createApp({
	data() {
		return {
			heading: 'title',
			subhead: 'SubHead',
			image:
				'https://images.unsplash.com/photo-1617089398993-eb8eaa0ecf9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
			btntitle: 'Click Me',
			url: 'https://unsplash.com/',
		};
	},
});

app.mount('.vapp');
