<script lang="ts">
	import Hero from '../../lib/components/Hero.svelte';
	import Products from '../../lib/components/Products.svelte';
	import Faqs from '../../lib/components/Faqs.svelte';
	import Footer from '../../lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="container mx-auto px-4 py-8">
	<Hero />

	<Products />

	<section class="my-16">
		<h2 class="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
		<Faqs />
	</section>
</main>
