<template>
	<h1>This is the account page</h1>
	<h2>{{ $route.params.id }}</h2>
	<h2>Router</h2>
	<p>{{ $router }}</p>
	<h2>Route</h2>
	<p>{{ $route }}</p>
</template>

<script>
export default {
	name: 'Account',
	data() {
		return {};
	},
};
</script>

<style></style>
