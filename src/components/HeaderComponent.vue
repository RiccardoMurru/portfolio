<template>
	<header>
		<vs-navbar class="navbar" color="dark" text-white right-collapsed v-model="active">
			<template #left>
				<img class="logo" src="@/assets/logo.png" alt="riccardo murru" />
			</template>

			<template #right>
				<vs-navbar-item to="/" :active="active == 'home'" id="home">
					Home
				</vs-navbar-item>
				<vs-navbar-item to="/works" :active="active == 'works'" id="works">
					Portfolio
				</vs-navbar-item>
				<vs-navbar-item to="/contacts" :active="active == 'contacts'" id="contacts">
					Contatti
				</vs-navbar-item>
			</template>
			<vs-button class="hamburger" dark @click="activeSidebar = !activeSidebar"
				><i class="fas fa-bars"></i
			></vs-button>
		</vs-navbar>
		<vs-sidebar
			class="sidebar"
			background="dark"
			textWhite
			absolute
			v-model="activeSidebarIcon"
			:open.sync="activeSidebar"
		>
			<template #logo>
				<img class="logo" src="@/assets/logo.png" alt="riccardo murru" />
			</template>
			<vs-sidebar-item class="sidebar-item" to="/" id="home">
				<template #icon>
					<i class="fas fa-home"></i>
				</template>
				Home
			</vs-sidebar-item>
			<vs-sidebar-item to="/works" id="works">
				<template #icon>
					<i class="fas fa-laptop-code"></i>
				</template>
				Portfolio
			</vs-sidebar-item>
			<vs-sidebar-item to="/contacts" id="contacts">
				<template #icon>
					<i class="far fa-address-card"></i>
				</template>
				Contatti
			</vs-sidebar-item>
		</vs-sidebar>
	</header>
</template>

<script>
export default {
	name: 'HeaderComponent',
	data: () => ({
		active: 'home',
		activeSidebarIcon: 'home',
		activeSidebar: false,
	}),
};
</script>

<style lang="scss" scoped>
.navbar {
	max-width: 1400px;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
}
.logo {
	width: 30px;
}
.sidebar {
	min-height: 100vh;
}
.hamburger {
	color: #eee;
	font-size: 1.5rem;
}

@media (min-width: 576px) {
	.hamburger,
	.sidebar {
		display: none;
	}
}
</style>
