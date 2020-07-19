<script>
  import { onMount } from 'svelte';
  import { ts } from '../date-store.js';
  import accounts from './account-store.js';
  import Account from './Account.svelte';
  import FormActions from '../UI/FormActions.svelte';

  let creating;
  let account;

  function resetDefaults() {
    creating = false;
    account = {
      name: 'Account Name',
      startingBalance: 0,
      displayCodeNum: true,
      icon: false
    };
  }

  function addAccount() {
    account.id = 'account-' + $ts;
    account.currentBalance = account.startingBalance;

    accounts.add(account);

    resetDefaults();
  }

  onMount(resetDefaults);
</script>

<h1 class="title">Accounts</h1>

<div class="accounts">
  {#each $accounts as accnt (accnt.id)}
    <Account {...accnt} />
  {/each}
</div>

{#if !creating}
  <button
    class="record"
    on:click="{() => creating = !creating}">
    + Add Account
  </button>
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

  <label for="account--balance">
    Starting Balance
    <input
      id="account--balance"
      type="number"
      step="0.01"
      bind:value={account.startingBalance}
      required >
  </label>

  <FormActions
    del="Trash"
    save="Create"
    on:save="{addAccount}"
    on:trash="{resetDefaults}" />
{/if}
