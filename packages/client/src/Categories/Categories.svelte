<script>
  import categories from './category-store.js';
  import Category from './Category.svelte';
</script>

{#each $categories as cat (cat.id)}
  <Category {...cat} />
{/each}
