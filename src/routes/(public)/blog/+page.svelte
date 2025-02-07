<script>
</script>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<h1 class="text-3xl font-bold mb-8">Blog Posts</h1>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each blogPosts as post}
			<div class="bg-white shadow-md rounded-lg overflow-hidden">
				<img src={post.image} alt={post.title} class="w-full h-48 object-cover" />
				<div class="p-6">
					<h2 class="text-xl font-semibold mb-2">{post.title}</h2>
					<p class="text-gray-600 mb-4">{post.excerpt}</p>
					<a href={`/blog/${post.slug}`} class="text-indigo-600 hover:text-indigo-800 font-medium">
						Read more
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>
