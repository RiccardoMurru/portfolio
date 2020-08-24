<template>
	<div id="app">
		<HeaderComponent />
		<router-view />
		<FooterComponent />
		<!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
	</div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent';
import FooterComponent from '@/components/FooterComponent';

export default {
	components: {
		HeaderComponent,
		FooterComponent,
	},
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
* {
	box-sizing: border-box;
}
body {
	margin: 0;
	padding: 0;
	font-family: 'Lato', sans-serif;
	#app {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		min-height: 100vh;
		max-width: 1140px;
		margin: 0 auto;
		main {
			flex-grow: 1;
			padding: 4rem 1.5rem;
		}
	}
}
@media (min-width: 576px) {
}
@media (min-width: 768px) {
}
@media (min-width: 992px) {
}
@media (min-width: 1200px) {
}
</style>
