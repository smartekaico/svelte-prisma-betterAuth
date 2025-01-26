<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from '../$types';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<div class="min-h-screen flex">
	<!-- Sidebar -->
	<aside class="w-64 bg-gray-800 text-white">
		<div class="p-4">
			<h2 class="text-xl font-semibold">Admin Dashboard</h2>
		</div>
		<nav class="mt-4">
			<a href="/admin" class="block px-4 py-2 hover:bg-gray-700">Dashboard</a>
			<a href="/admin/users" class="block px-4 py-2 hover:bg-gray-700">Users</a>
			<a href="/admin/settings" class="block px-4 py-2 hover:bg-gray-700">Settings</a>
		</nav>
	</aside>

	<!-- Main Content -->
	<main class="flex-1 bg-gray-100">
		<header class="bg-white shadow">
			<div class="px-4 py-6">
				<div class="flex justify-between items-center">
					<h1 class="text-2xl font-semibold">Welcome, {data.session!.user!.name}</h1>
					<form action="/logout" method="POST">
						<button
							type="submit"
							class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
						>
							Logout
						</button>
					</form>
				</div>
			</div>
		</header>

		<div class="p-6">
			{@render children()}
		</div>
	</main>
</div>
