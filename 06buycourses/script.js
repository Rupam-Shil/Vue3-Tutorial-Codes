const app = Vue.createApp({
	data() {
		return {
			holdMyItem: [],
			courseList: [
				{
					id: '1',
					coursename: 'React',
					subtitle: 'Learn React with me',
					price: 199,
					image: 'https://i.imgur.com/iQuxcW0.jpg',
					url: 'https://google.com',
				},
				{
					id: '2',
					coursename: 'Python',
					subtitle: 'Learn Python with me',
					price: 299,
					image:
						'https://i.pinimg.com/originals/9b/41/fa/9b41fafad51b5ba82b3257b395be76cb.png',
					url: 'https://google.com',
				},
				{
					id: '3',
					coursename: 'Vue',
					subtitle: 'Learn vue with me',
					price: 399,
					image:
						'https://i2.wp.com/css-tricks.com/wp-content/uploads/2018/03/vue-circles.jpg',
					url: 'https://google.com',
				},
			],
		};
	},
	computed: {
		finalBill() {
			return (
				this.holdMyItem.reduce(
					(accumulator, course) => Number(course.price) + accumulator,
					0
				) *
				(118 / 100)
			);
		},
	},

	methods: {
		addToHolder(course) {
			this.holdMyItem = [...this.holdMyItem, course];
		},
	},
});

app.mount('#vapp');
