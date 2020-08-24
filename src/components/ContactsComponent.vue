<template>
	<main>
		<h1>Contatti</h1>
		<a href="mailto:riccardo.mr@gmail.com">
			<vs-card>
				<template #title>
					<h2>Scrivimi una mail</h2>
				</template>
				<template #img>
					<i class="fas fa-envelope"></i>
				</template>
				<template #text>
					<p>
						riccardo.mr@gmail.com
					</p>
				</template>
			</vs-card>
		</a>
		<a href="https://www.linkedin.com/in/riccardomurru/">
			<vs-card>
				<template #title>
					<h2>Aggiungimi su LinkedIn</h2>
				</template>
				<template #img>
					<i class="fab fa-linkedin"></i>
				</template>
				<template #text>
					<p>
						Per eventuali collaborazioni
					</p>
				</template>
			</vs-card>
		</a>
		<a href="https://github.com/RiccardoMurru">
			<vs-card>
				<template #title>
					<h2>E su GitHub</h2>
				</template>
				<template #img>
					<i class="fab fa-github"></i>
				</template>
				<template #text>
					<p>
						Per guardare il mio codice
					</p>
				</template>
			</vs-card>
		</a>
		<vs-card>
			<template #title>
				<h2>Dove?</h2>
			</template>
			<template #img>
				<i class="fas fa-map-signs"></i>
			</template>
			<template #text>
				<p>
					Torino, Corso Regina Margherita, 96
				</p>
			</template>
		</vs-card>
		<a href="./CV_Riccardo_Murru.pdf" target="_blank" download>
			<vs-card>
				<template #title>
					<h2>Scarica il mio CV</h2>
				</template>
				<template #img>
					<i class="fas fa-file-pdf"></i>
				</template>
				<template #text>
					<p>
						Per sapere quello che ho fatto
					</p>
				</template>
			</vs-card>
		</a>
		<vs-card>
			<template #title>
				<h2>Call me maybe?</h2>
			</template>
			<template #img>
				<i class="fas fa-mobile-alt"></i>
			</template>
			<template #text>
				<p>
					+39 380 3096232
				</p>
			</template>
		</vs-card>
	</main>
</template>

<script>
export default {
	name: 'ContactsComponent',
};
</script>

<style lang="scss" scoped>
main {
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
	.fa-envelope {
		color: #1a5cff;
	}
	.fa-linkedin {
		color: #0077b5;
	}
	.fa-github {
		color: #141417;
	}
	.fa-map-signs {
		color: #f90;
	}
	.fa-file-pdf {
		color: #bd081c;
	}
	.fa-mobile-alt {
		color: #25d366;
	}
}
@media (min-width: 576px) {
	main {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		gap: 1rem;
		h1 {
			grid-column: 1/4;
			align-self: center;
		}
	}
}
i {
	display: inline-block;
	padding: 1rem;
	font-size: 120px;
}
p {
	font-size: 1.2rem;
}
a {
	text-decoration: none;
}
</style>
