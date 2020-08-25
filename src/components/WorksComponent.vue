<template>
	<main>
		<h1>
			Portfolio
		</h1>
		<h3>
			Alcuni dei lavori da me realizzati:
		</h3>
		<carousel :autoplay="true" :autoplayTimeout="3000" :loop="true" :perPage="1">
			<slide>
				<vs-button
					class="slide-button"
					square
					border
					dark
					href="https://github.com/ducthang-vu/BoolBnB"
				>
					<img src="@/assets/boolbnb_small.png" alt="boolbnb" />
				</vs-button>
			</slide>
			<slide>
				<vs-button
					class="slide-button"
					square
					border
					dark
					href="https://github.com/ducthang-vu/BoolBnB"
				>
					<img src="@/assets/boolbnb2_small.png" alt="boolbnb" />
				</vs-button>
			</slide>
			<slide>
				<vs-button
					class="slide-button"
					square
					border
					dark
					href="https://github.com/RiccardoMurru/ajax-ex-boolflix"
				>
					<img src="@/assets/boolflix_small.png" alt="boolflix" />
				</vs-button>
			</slide>
			<slide>
				<vs-button
					class="slide-button"
					square
					border
					dark
					href="https://github.com/RiccardoMurru/js-html-css-boolzap"
				>
					<img src="@/assets/boolzapp_small.png" alt="boolzapp" />
				</vs-button>
			</slide>
			<slide>
				<vs-button
					class="slide-button"
					square
					border
					dark
					href="https://github.com/RiccardoMurru/html-css-spotifyweb"
				>
					<img src="@/assets/spotify_small.png" alt="spotify" />
				</vs-button>
			</slide>
		</carousel>
	</main>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
	name: 'WorksComponent',
	components: {
		Carousel,
		Slide,
	},
};
</script>

<style lang="scss" scoped>
.slide-button {
	width: 90%;
	height: 90%;
	padding: 5%;
	margin: 0 5%;
	img {
		max-width: 100%;
	}
}
</style>
