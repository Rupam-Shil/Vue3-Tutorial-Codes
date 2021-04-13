<template>
	<div class="container">
		<div class="card card-body text-center p-5 mt-5 border-primary">
			<div>
				<i class="far fa-star text-warning fa-6x" @click="setRating(1)"></i>
				<i class="far fa-star text-warning fa-6x" @click="setRating(2)"></i>
				<i class="far fa-star text-warning fa-6x" @click="setRating(3)"></i>
				<i class="far fa-star text-warning fa-6x" @click="setRating(4)"></i>
				<i class="far fa-star text-warning fa-6x" @click="setRating(5)"></i>
			</div>
			<h1 class="text-success mt-4">
				{{ message }}
			</h1>
		</div>
	</div>
</template>
<script>
export default {
	name: 'App',
	data() {
		return {
			message: '',
		};
	},
	methods: {
		setRating(rating) {
			if (rating == 5) {
				this.message = 'We are glad';
			} else if (rating == 4) {
				this.message = 'We will improve';
			} else if (rating == 3) {
				this.message = 'sorry';
			} else if (rating == 2) {
				this.message = 'Sounds Horrible';
			} else if (rating == 1) {
				this.message = 'We will close ';
			}
		},
	},
};
</script>

<style>
body {
	background-color: #333;
}
</style>
