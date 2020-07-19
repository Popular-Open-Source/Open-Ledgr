<script>
  import categories from './category-store.js';
  import Category from './Category.svelte';
</script>

<h1 class="title">Categories</h1>

{#each $categories as cat (cat.id)}
  <Category {...cat} />
{/each}

<!-- <AddCategory /> -->
