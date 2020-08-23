<template>
	<div id="app">
		<HeaderComponent />
		<router-view />
		<!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
	</div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent';

export default {
	components: {
		HeaderComponent,
	},
	data: () => ({
		active: 'guide',
	}),
};
</script>
<style></style>
