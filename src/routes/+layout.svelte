<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import 'vanilla-cookieconsent/dist/cookieconsent.css';
	import Navbar from "../components/navbar.svelte";
	import Footer from "../components/footer.svelte";
	import { onMount } from 'svelte';
	import * as CookieConsent from 'vanilla-cookieconsent';
	import { config } from '$lib/cookieconsent-config';
	import { page } from '$app/stores';
	
	let { children } = $props();
	export const prerender = true;
	export const ssr = true;

	onMount(() => {
		CookieConsent.run(config);
		
		// Update language when route changes
		const unsubscribe = page.subscribe(($page) => {
			const lang = $page.url.pathname.includes('/en') ? 'en' : 'cs';
			CookieConsent.setLanguage(lang);
		});

		return () => {
			unsubscribe();
		};
	});
</script>

<style>

</style>

<ParaglideJS {i18n}>
	<Navbar></Navbar>	
	{@render children()}	
	<Footer></Footer>
</ParaglideJS>

