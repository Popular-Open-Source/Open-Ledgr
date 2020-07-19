<script>
  import { ts } from '../date-store.js';
  import accounts from './account-store.js';
  import FormActions from '../UI/FormActions.svelte';

  export let account;

  function updateAccount() {
    if (!account.id) {
      account.id = 'account-' + $ts;

    }
  }
</script>

<form>
  <label for="account-name">
    Account Name
    <input id="account-name" type="text" bind:value={account.name} >
  </label>
  <label for="account-balance">
    Account Balance
    <input id="account-balance" type="number" step=".01" bind:value={account.startingBalance} >
  </label>
  <label for="account-codeNum">
    Display Code Number
    <input id="account-codeNum" type="checkbox" bind:checked={account.displayCodeNum}>
  </label>
  <FormActions on:save on:trash/>
</form>
