<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import '../app.css';

	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<Header />
{@render children()}
<Footer />
