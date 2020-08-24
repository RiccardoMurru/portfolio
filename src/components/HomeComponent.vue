<template>
	<main>
		<h1>Qualcosa su di me</h1>
		<p>
			Sono un full stack web developer con una forte passione per il mondo digitale,
			particolarmente affascinato dalla costante ed esponenziale evoluzione delle soluzioni e
			delle tecnologie legate allo sviluppo web, che hanno prodotto dei significativi
			cambiamenti e miglioramenti sia in termini di processo di sviluppo che di user
			experience.
		</p>
		<p>
			La mia indole esploratrice mi ha portato a percorrere diverse strade, sia in ambito
			formativo che lavorativo, passando dall'informatica all'economia, portandomi ad
			occuparmi di consulenza di business controlling presso una delle società leader mondiali
			in questo settore, per poi riportarmi alla passione di partenza: la programmazione.
		</p>
		<p>
			Sono entusiasta di intraprendere un viaggio che mi porterà ad affrontare nuove sfide
			sempre più complesse, contribuendo ad accrescere il mio bagaglio di esperienze e
			competenze.
		</p>

		<h2>Tecnologie utilizzate</h2>
		<div class="technologies">
			<img src="@/assets/html5.png" alt="html" />
			<img src="@/assets/css3.png" alt="css" />
			<img src="@/assets/js.png" alt="js" />
			<img src="@/assets/sass.png" alt="sass" />
			<img src="@/assets/bootstrap.png" alt="bootstrap" />
			<img src="@/assets/vue.png" alt="vue" />
			<img src="@/assets/jquery.png" alt="jquery" />
			<img src="@/assets/mysql.png" alt="mysql" />
			<img src="@/assets/laravel.png" alt="laravel" />
		</div>
	</main>
</template>

<script>
export default {
	name: 'HomeComponent',
};
</script>

<style scoped>
p {
	line-height: 1.5em;
	text-align: justify;
}
h2 {
	margin: 2rem 0;
}
.technologies {
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	gap: 1rem;
	justify-items: center;
}
img {
	/* justify-self: center; */
	width: 100px;
	height: 100px;
}
</style>
