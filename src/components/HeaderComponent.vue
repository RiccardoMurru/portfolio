<template>
	<header class="center examplex">
		<vs-navbar color="dark" text-white center-collapsed v-model="active">
			<template #left>
				<img class="logo" src="@/assets/logo.png" alt="riccardo murru" />
			</template>
			<vs-navbar-item :active="active == 'guide'" id="guide">
				Guide
			</vs-navbar-item>
			<vs-navbar-item :active="active == 'docs'" id="docs">
				Documents
			</vs-navbar-item>
			<vs-navbar-item :active="active == 'components'" id="components">
				Components
			</vs-navbar-item>
			<vs-navbar-item :active="active == 'license'" id="license">
				license
			</vs-navbar-item>
			<template #right>
				<vs-button flat>Login</vs-button>
				<vs-button>Get Started</vs-button>
			</template>
		</vs-navbar>
	</header>
</template>

<script>
export default {
	name: 'HeaderComponent',
	data: () => ({
		active: 'guide',
		color: 'dark',
	}),
};
</script>

<style lang="scss" scoped>
.logo {
	width: 30px;
}
</style>
