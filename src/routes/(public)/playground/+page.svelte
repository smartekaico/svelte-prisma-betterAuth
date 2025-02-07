<script lang="ts">
	import ButtonBase from '$lib/components/ButtonBase.svelte';
	import Counter from '$lib/components/Counter.svelte';
	import RandomNum from '$lib/components/RandomNum.svelte';
	import { AlarmCheck, Search } from 'lucide-svelte';
	import type { PageData } from '../$types';

	// let { data }: { data: PageData } = $props();
</script>

<div class="flex flex-col items-center justify-center py-6">
	<RandomNum />
	<br />
	<hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
	<Counter />
	<br />
	<h3>Snippet Usage in components</h3>

	<ButtonBase size="sm">
		{#snippet left()}
			<Search />
		{/snippet}
		Text
		{#snippet right()}
			<AlarmCheck />
		{/snippet}
	</ButtonBase>
</div>
