<script lang="ts">
	import { onDestroy, onMount, tick, untrack } from 'svelte';
	let randNum = $state(Math.floor(Math.random() * 10));
	let doubledRand = $derived(randNum * 2);
	let txtInput = $state('');
	let history: number[] = $state([untrack(() => randNum)]); //untrack makes sure that the value is not tracked and not reevaluated or rerun
	let historyTag: HTMLParagraphElement;
	// svelte-ignore state_referenced_locally
	let htmlTag: string = `<h2 class="text-red-500 text-3xl">the random Number HERE</h2>`;

	// effect hook, rendering component to run every time the value of randNum (dependency) is updated
	$effect(() => {
		console.log('randNum now .. ', randNum);
	});

	// lifecycle hook onMount(), running once the component is mounted
	onMount(() => {
		console.log('The component has mounted ', historyTag?.innerHTML);

		// return makes sure the component is unmounted when it is destroyed
		return () => {
			console.log('The component has been unmounted ', historyTag?.innerHTML);
		};
	});

	//lifecycle hook onDestroy(), ruuning once the component is destroyed
	onDestroy(() => {
		console.log('The component has been destroyed ', historyTag?.innerHTML);
	});

	// lifecycle hook pre effect, running before the effect
	$effect.pre(() => {
		history.length;
		console.log('$effect.pre ', historyTag?.innerHTML);
		tick().then(() => {
			console.log('After tick ', historyTag?.innerHTML);
		});
		return () => {
			console.log('Pre Effect cleanup ', historyTag?.innerHTML);
		};
	});

	$effect(() => {
		history.length;
		console.log('$effect ', historyTag?.innerHTML);
	});
</script>

<div class="flex flex-col items-center justify-center py-4">
	<h2>the random Number = {randNum}</h2>
	<h2>the doubled Number = {doubledRand}</h2>
	<br />
	<input type="text" bind:value={txtInput} />
	<br />
	<h3>text input = {txtInput}</h3>
	<!-- rendering html element inside the component -->
	{@html htmlTag}
	<br /><br />
	<p bind:this={historyTag}>History: {history}</p>

	<button
		class="btn btn-outline btn-primary"
		onclick={() => {
			history = [...history, randNum];
			randNum = Math.floor(Math.random() * 10);
		}}>Randomize</button
	>
</div>
