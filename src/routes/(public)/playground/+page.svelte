<script lang="ts">
	import Counter from '$lib/components/Counter.svelte';
	import RandomNum from '$lib/components/RandomNum.svelte';
	import type { PageData } from '../$types';

	// let { data }: { data: PageData } = $props();
</script>

<div class="flex flex-col items-center justify-center py-6">
	<RandomNum />
	<br />
	<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
	<Counter />
</div>
