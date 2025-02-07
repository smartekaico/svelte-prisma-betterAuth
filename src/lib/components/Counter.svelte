<script lang="ts">
	let count = $state(0);
	let frequency = $state(1000);
	let paused = $state(false);

	$effect(() => {
		let interval: ReturnType<typeof setInterval> | undefined;
		if (!paused) {
			interval = setInterval(() => {
				count += 1;
			}, frequency);
		}

		return () => clearInterval(interval);
	});
</script>

<h1>Counter</h1>

<h2 class="mb-4">Count = {count} | Frequency = {frequency}ms</h2>

<div class="join">
	<button class="btn join-item" onclick={() => (frequency = frequency * 2)}>Slower</button>
	<button class="btn join-item" onclick={() => (frequency = frequency / 2)}>Faster</button>
	<button class="btn join-item" onclick={() => (paused = !paused)}
		>{paused ? 'Resume' : 'Pause'}</button
	>
	<button
		class="btn join-item"
		onclick={() => {
			count = 0;
			const _originalFrequency = frequency;
			frequency = 0;
			frequency = _originalFrequency;
		}}>Reset</button
	>
</div>
