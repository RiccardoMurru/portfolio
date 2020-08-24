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
					Works
				</vs-navbar-item>
				<vs-navbar-item :active="active == 'contacts'" id="contacts">
					Contacts
				</vs-navbar-item>
				<vs-navbar-item :active="active == 'cv'" id="cv">
					CV
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
			<vs-sidebar-item to="/" id="home">
				<template #icon>
					<i class="fas fa-home"></i>
				</template>
				Home
				<!-- <router-link to="/">Home</router-link> -->
			</vs-sidebar-item>
			<vs-sidebar-item to="/works" id="works">
				<template #icon>
					<i class="fas fa-laptop-code"></i>
				</template>
				Works
			</vs-sidebar-item>
			<vs-sidebar-item id="contacts">
				<template #icon>
					<i class="far fa-address-card"></i>
				</template>
				Contacts
			</vs-sidebar-item>
			<vs-sidebar-item id="curriculum">
				<template #icon>
					<i class="far fa-file-alt"></i>
				</template>
				CV
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
.logo {
	width: 30px;
}
.sidebar {
	min-height: 100vh;
}
.hamburger {
	color: #eee;
}

@media (min-width: 576px) {
	.hamburger,
	.sidebar {
		display: none;
	}
}
</style>
