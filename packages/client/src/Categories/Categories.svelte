<script>
  import { createEventDispatcher } from 'svelte';
  import { toSlug } from '../utility.js';
  import categories from './category-store.js';
  import Category from './Category.svelte';
  import CategoryForm from './CategoryForm.svelte';

  const dispatch = createEventDispatcher();
  const category = {
    name: 'Category Name',
    linkedAccounts: []
  };

  let creating;
  let selected;

  function resetDefaults() {
    creating = false;
    selected = false;
  }

  function selectCategory(category) {
    selected = category.id;

    dispatch('route', {
      title: category.name
    });

    creating = false;
  }
</script>

<div class="categories">
  {#each $categories as cat (cat.id)}

    {#if !selected}

      <h3>
        <a
          href={() => toSlug(cat.name)}
          on:click|preventDefault={() => selectCategory(cat)}>
          {cat.name}
          </a>
      </h3>

    {:else if selected === cat.id}

      <Category
        category={cat}
        on:categoryDeleted={resetDefaults}
        on:route />
    {/if}

  {/each}
</div>

{#if !selected}
  {#if !creating}

    <button
      class="record"
      on:click="{() => creating = !creating}">
      + Add Category
    </button>

  {:else}

    <CategoryForm
      {...category}
      on:categoryCreated={resetDefaults}
      on:cancelCreate={resetDefaults}/>

  {/if}
{/if}
