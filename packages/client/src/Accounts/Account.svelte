<script>
  import accounts from './account-store.js';
  import Edit from '../UI/Edit.svelte';
  import FormActions from '../UI/FormActions.svelte';

  export let id;
  export let name;
  export let startingBalance;
  export let currentBalance;
  export let displayCodeNum;
  export let icon;

  let editing = false;

  $: account = {
    id,
    name,
    startingBalance,
    currentBalance,
    displayCodeNum,
    icon
  };

  function toggleEditView(event) {
    console.log(event);

    if (account.name !== name) {
      account.name = name;
    }

    if (account.displayCodeNum !== displayCodeNum) {
      account.displayCodeNum = displayCodeNum;
    }

    editing = !editing;
  }

  function deleteAccount() {
    if (confirm('This will delete ' + name)) {
      accounts.delete(id);
    }
  }

  function updateAccount() {
    accounts.update(account);
    editing = false;
  }
</script>

<div class="account" {id}>
  <Edit {editing} on:edit={toggleEditView} />

  {#if !editing}

    <h3>{name}</h3>

  {:else}

    <label for="account--codeNum">
      Display Code Number
      <input
        id="account--codeNum"
        type="checkbox"
        bind:checked={account.displayCodeNum} >
    </label>

    <label for="account--name">
      Account Name
      <input
        id="account--name"
        type="text"
        bind:value={account.name}
        required >
    </label>

    <FormActions
      save="Update"
      on:save={updateAccount}
      on:trash={deleteAccount} />

  {/if}

</div>

<style>
  .account {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
