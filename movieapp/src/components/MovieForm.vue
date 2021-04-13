<template>
	<form @submit.prevent="onSubmit" class="text-center">
		<input
			class="form-control mb-2"
			placeholder="Awesome Movie Name"
			name="name"
			v-model="name"
			type="text"
		/>
		<input
			class="form-control mb-2"
			placeholder="Movie Url"
			name="url"
			v-model="url"
			type="text"
		/>
		<button type="submit" class="btn btn-info btn-block">Add Movie</button>
	</form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
	name: 'MovieForm',
	data() {
		return {
			name: '',
			url: '',
		};
	},
	props: {
		addMovie: Function,
	},
	methods: {
		onSubmit() {
			this.addMovie({
				name: this.name,
				url: this.url,
				id: uuidv4(),
				date: Date.now(),
			});

			this.name = '';
			this.url = '';
		},
	},
};
</script>

<style></style>
