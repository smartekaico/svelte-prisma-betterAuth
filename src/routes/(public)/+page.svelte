<script lang="ts">
	import Hero from '../../lib/components/Hero.svelte';
	import Products from '../../lib/components/Products.svelte';
	import Faqs from '../../lib/components/Faqs.svelte';
	import type { LayoutData } from '../$types';
	import type { Snippet } from 'svelte';
	import RandomNum from '$lib/components/RandomNum.svelte';

	interface PageData extends LayoutData {
		user: {
			id: string;
			email: string;
		} | null;
	}

	let { data, children }: { data: PageData; children: Snippet } = $props();
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<Hero />

	<div class="flex items-center justify-center">
		<form method="POST" action="?/{data.user ? 'signOut' : 'signIn'}">
			<button class="btn btn-xl" type="submit">Sign {data.user ? 'out' : 'in'}</button>
		</form>
	</div>

	{#if data.user}
		<ul>
			{#each Object.entries(data.user) as [key, value]}
				<li>{key}: {value}</li>
			{/each}
		</ul>
	{/if}
	<Products />

	<section class="my-16">
		<h2 class="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
		<Faqs />
	</section>
</main>
