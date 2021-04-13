<template>
	<main>
		<div class="app p-4 container-fluid">
			<div class="row">
				<div class="col col-md-4 mt-4 offset-md-4">
					<div class="text-center">
						<div v-if="user">
							<Usercard :user="user"></Usercard>
							<button
								@click="fetchUser"
								class="btn btn-primary btn-lg btn-block mt-2"
							>
								Fetch New User
							</button>
						</div>
						<div v-else class="text-center">
							<div class="spinner-border spinner-grow" role="staus"></div>
							<div class="text-white">Loading....</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import axios from 'axios';
import Usercard from './components/card';

export default {
	name: 'App',
	data() {
		return {
			user: null,
		};
	},
	mounted() {
		this.fetchUser();
	},
	components: { Usercard },
	methods: {
		fetchUser() {
			axios.get('https://randomuser.me/api/').then((res) => {
				this.user = res.data.results[0];
				console.log(this.user);
			});
		},
	},
};
</script>

<style>
main {
	height: 100vh;
	background-image: url('./assets/bg.png');
	background-position: center;
	background-size: cover;
}

.card {
	margin-top: 125px;
}

.img {
	margin-top: -80px;
}
</style>
