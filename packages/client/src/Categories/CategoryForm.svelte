<script>
  import { createEventDispatcher } from 'svelte';
  import accounts from '../Accounts/account-store.js';
  import categories from './category-store.js';
  import FormActions from '../UI/FormActions.svelte';

  const dispatch = createEventDispatcher();

  export let id;
  export let name;
  export let linkedAccounts;

  const originalName = name;

  function updateCategory(event) {
    categories.update({
      id,
      name,
      linkedAccounts
    });

    dispatch('categoryUpdated', {id});

    if (name !== originalName) {
      dispatch('route', {
        title: name
      });
    }
  }

  function deleteCategory(event) {
    if (confirm('This will delete ' + name)) {
      categories.delete(id);

      dispatch('route', {
        title: 'Categories'
      });

      dispatch('categoryDeleted', {id});
    }
  }

  function createCategory(event) {
    categories.add({
      id: 'category-' + event.detail.ts,
      name,
      linkedAccounts
    });

    dispatch('categoryCreated', {id});
  }
</script>

<form on:submit|preventDefault>

  <label for="category--name">
    Category Name
    <input
      id="category--name"
      type="text"
      bind:value={name}
      required >
  </label>

  <fieldset>
    <legend>Display for accounts:</legend>

    {#each $accounts as account (account.id)}
      <label for="cagegory--accounts">
        {account.name}
        <input
          type="checkbox"
          value={account.id}
          bind:group={linkedAccounts} >
      </label>
    {/each}
  </fieldset>

  {#if id}

    <FormActions
      del="Delete Category"
      save="Update"
      on:save={updateCategory}
      on:trash={deleteCategory} />

  {:else}

    <FormActions
      del="Cancel"
      save="Create"
      on:save={createCategory}
      on:trash={() => dispatch('cancelCreate', true)} />

  {/if}
</form>
