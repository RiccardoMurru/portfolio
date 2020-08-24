<template>
	<footer>
		<div class="social-buttons">
			<vs-button href="mailto:riccardo.mr@gmail.com" square size="large" color="dark" border>
				<i class="fas fa-envelope"></i>
			</vs-button>
			<vs-button
				href="https://www.linkedin.com/in/riccardomurru/"
				square
				size="large"
				color="dark"
				border
			>
				<i class="fab fa-linkedin"></i>
			</vs-button>
			<vs-button
				href="https://github.com/RiccardoMurru"
				square
				size="large"
				color="dark"
				border
			>
				<i class="fab fa-github"></i>
			</vs-button>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'FooterComponent',
};
</script>

<style lang="scss" scoped>
footer {
	padding-bottom: 1rem;
	padding-top: 1rem;
}
.social-buttons {
	display: flex;
	justify-content: center;
	align-items: center;
	i {
		font-size: 2rem;
	}
}
</style>
