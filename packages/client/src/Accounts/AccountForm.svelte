<script>
  import { createEventDispatcher } from 'svelte';
  import accounts from './account-store.js';
  import FormActions from '../UI/FormActions.svelte';

  const dispatch = createEventDispatcher();

  export let id;
  export let name;
  export let startingBalance;
  export let currentBalance;
  export let displayCodeNum;
  export let icon;

  const originalName = name;

  function updateAccount(event) {
    accounts.update({
      id,
      name,
      startingBalance,
      currentBalance,
      displayCodeNum,
      icon
    });

    dispatch('accountUpdated', {id});

    if (name !== originalName) {
      dispatch('route', {
        title: name
      });
    }
  }

  function deleteAccount(event) {
    if (confirm('This will delete ' + name)) {
      accounts.delete(id);

      dispatch('route', {
        title: 'Accounts'
      });

      dispatch('accountDeleted', {id});
    }
  }

  function createAccount(event) {
    accounts.add({
      id: 'account-' + event.detail.ts,
      name,
      startingBalance,
      currentBalance: startingBalance,
      displayCodeNum,
      icon
    });

    dispatch('accountCreated', {id});
  }
</script>

<form on:submit|preventDefault>

  <label for="account--codeNum">
    Display Code Number
    <input
      id="account--codeNum"
      type="checkbox"
      bind:checked={displayCodeNum} >
  </label>

  <label for="account--name">
    Account Name
    <input
      id="account--name"
      type="text"
      bind:value={name}
      required >
  </label>

  {#if id}

    <FormActions
      del="Delete Account"
      save="Update"
      on:save={updateAccount}
      on:trash={deleteAccount} />

  {:else}

    <label for="account--balance">
      Starting Balance
      <input
        id="account--balance"
        type="number"
        step="0.01"
        bind:value={startingBalance}
        required >
    </label>

    <FormActions
      del="Cancel"
      save="Create"
      on:save={createAccount}
      on:trash={() => dispatch('cancelCreate', true)} />

  {/if}

</form>
