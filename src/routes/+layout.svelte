<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Navbar from "../components/navbar.svelte";
	import Footer from "../components/footer.svelte";
	let { children } = $props();
	export const prerender = true;
	export const ssr = true;
</script>

<style>

</style>

<ParaglideJS {i18n}>
	<Navbar></Navbar>	
	{@render children()}	
	<Footer></Footer>
</ParaglideJS>

