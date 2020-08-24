<template>
	<main>
		<h1>
			Portfolio
		</h1>
		<h3>
			Alcuni dei lavori da me realizzati:
		</h3>
		<carousel :autoplay="true" :autoplayTimeout="3000" :loop="true" :perPage="1">
			<slide class="slide">
				<a href="https://github.com/ducthang-vu/BoolBnB">
					<img src="@/assets/boolbnb_small.png" alt="boolbnb" />
				</a>
			</slide>
			<slide class="slide">
				<a href="https://github.com/ducthang-vu/BoolBnB">
					<img src="@/assets/boolbnb2_small.png" alt="boolbnb" />
				</a>
			</slide>
			<slide class="slide">
				<a href="https://github.com/RiccardoMurru/ajax-ex-boolflix">
					<img src="@/assets/boolflix_small.png" alt="boolflix" />
				</a>
			</slide>
			<slide class="slide">
				<a href="https://github.com/RiccardoMurru/js-html-css-boolzap">
					<img src="@/assets/boolzapp_small.png" alt="boolzapp" />
				</a>
			</slide>
			<slide class="slide">
				<a href="https://github.com/RiccardoMurru/html-css-spotifyweb">
					<img src="@/assets/spotify_small.png" alt="spotify" />
				</a>
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
.slide {
	width: 100%;
	padding: 5%;
	border: 1px solid black;
	img {
		max-width: 100%;
	}
}
@media (min-width: 768px) {
	.slide {
		max-width: 70%;
		margin: 0 15%;
	}
}
</style>
