<template>
	<div class="card border-primary">
		<div class="card-body text-center">
			<img
				:src="user.picture?.large"
				height="150"
				width="150"
				class="rounded-circle img-thumbnail border-danger zoomIn"
			/>
			<div class="card-title text-primary">
				<h1>
					<span class="pl-2">{{ fullname }}</span>
				</h1>
				<p class="card-text text-dark">
					<i class="fas fa-envelope"></i>{{ user.email }}
					<br />
					<i class="fas fa-map-marker-alt"></i>{{ location }}
					<br />
					<i class="fas fa-phone"></i>{{ user.phone }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Usercard',
	props: ['user'],
	computed: {
		fullname() {
			return `${this.user.name?.title}  ${this.user.name?.first} ${this.user.name?.last}`;
		},
		location() {
			return `${this.user.location?.city}  ${this.user.location?.state} ${this.user.location?.country} ${this.user.location?.postcode}`;
		},
	},
};
</script>

<style></style>
