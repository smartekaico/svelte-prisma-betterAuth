<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		left?: Snippet;
		right?: Snippet;
		children?: Snippet | undefined;
		size?: 'sm' | 'lg';
		shadow?: boolean;
	}

	let { left, right, children, size = 'sm', shadow = false }: Props = $props();
</script>

<button
	class="btn bg-red-500 text-white rounded-sm border-none px-6 py-3 cursor-pointer hover:bg-red-600"
	class:sm={size === 'sm'}
	class:lg={size === 'lg'}
	class:shadow
>
	{#if left}
		<div class="me-[10px]">
			{@render left()}
		</div>
	{/if}
	{#if children}
		{@render children()}
	{/if}
	{#if right}
		<div class="ms-[10px]">
			{@render right()}
		</div>
	{/if}
</button>
