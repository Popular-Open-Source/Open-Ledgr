<script>
  import CategoryForm from './CategoryForm.svelte';
  import Edit from '../UI/Edit.svelte';

  export let category;

  let editing = false;
</script>

<div class="category" id={category.id}>
  <Edit {editing} on:edit={() => editing = !editing} />

  {#if editing}
    <CategoryForm
      {...category}
      on:route
      on:categoryUpdated={() => editing = false}
      on:categoryDeleted />
  {/if}

</div>

<style>
  .category :global(.edit) {
    margin-left: auto;
  }
</style>
