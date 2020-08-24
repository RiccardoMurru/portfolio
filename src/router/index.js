import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Works from '../views/Works.vue';
import Contacts from '../views/Contacts.vue';

// import About from '@/views/About';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/works',
		name: 'Works',
		component: Works,
	},
	{
		path: '/contacts',
		name: 'Contacts',
		component: Contacts,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
