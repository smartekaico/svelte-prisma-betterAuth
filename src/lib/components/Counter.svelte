<script lang="ts">
	let count = $state(0);

	$effect(() => {
		const interval = setInterval(() => {
			count += 1;
		});
	});
</script>

<h1>Counter</h1>

<h2>Count = {count}</h2>
