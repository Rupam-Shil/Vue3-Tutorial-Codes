<template>
	<main>
		<Header title="Movie App"></Header>
		<div class="container mt-3">
			<div class="row">
				<div class="offset-md-3 col-lg-6 p-2">
					<div class="card card-body mb-2">
						<MovieForm :addMovie="addMovie" />
					</div>
					<MovieList :movies="movies" :deleteMovie="deleteMovie" />
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import Header from './layout/Header.vue';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

export default {
	name: 'App',
	components: {
		Header,
		MovieList,
		MovieForm,
	},
	data() {
		return {
			movies: [],
		};
	},
	methods: {
		addMovie(movie) {
			this.movies.push(movie);
			localStorage.setItem('@movies', JSON.stringify(this.movies));
		},

		deleteMovie(id) {
			const index = this.movies.findIndex((movie) => movie.id === id);
			this.movies.splice(index, 1);
			localStorage.setItem('@movies', JSON.stringify(this.movies));
		},
	},
	mounted() {
		if (localStorage.getItem('@movies')) {
			try {
				this.movies = JSON.parse(localStorage.getItem('@movies'));
			} catch (e) {
				localStorage.removeItem('@movies');
			}
		}
	},
};
</script>

<style>
* {
	padding: 0;
	outline: 0;
	margin: 0;
	box-sizing: border-box;
}
main {
	background-image: url('./assets/bg.png');
	background-position: center;
	background-size: cover;
	min-height: 100vh;
}
</style>
