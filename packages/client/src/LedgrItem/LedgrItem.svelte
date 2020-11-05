<script>
  import { today } from '../date-store.js';
  import accounts from '../Accounts/account-store.js';
  import categories from '../Categories/category-store.js';

  let transactionTypes = [
    {
      value: 'debit',
      label: 'Debit / Withdrawal'
    },
    {
      value: 'credit',
      label: 'Credit / Deposit'
    }
  ];

  export let id;
  export let amount;
  export let category;
  export let account;
  export let type;
  export let description;
  export let date = $today;
  export let codeNum;

</script>

<form on:submit|preventDefault>
  <label for="transaction--amount">
    Amount
    <input
      id="transaction--amount"
      type="number"
      step="0.01"
      bind:value={amount}
      required >
  </label>

  <label for="transaction--account">
    Account
    <select
      id="transaction--account"
      bind:value={account}>
      <option value="">Select Account</option>
      {#each $accounts as acct (acct.id)}
        <option value={acct.id}>{acct.name}</option>
      {/each}
    </select>
  </label>

  <label for="transaction--category">
    Category
    <select
      id="transaction--category"
      bind:value={category}>

      <option value="">Select Category</option>
      {#each $categories as cat (cat.id)}
        <option value={cat.id}>{cat.name}</option>
      {/each}
    </select>
  </label>

  {#each transactionTypes as ttype (ttype.value)}
    <label>
      {ttype.label}
      <input type="radio" value={ttype.value} bind:group={type}>
    </label>
  {/each}

  <label for="transaction--month">
    <input
      id="transaction--month"
      type="number"
      step="1"
      min="1"
      max="12"
      bind:value={date.month}
      required >
  </label>

  <label for="transaction--day">
    <input
      id="transaction--day"
      type="number"
      step="1"
      min="1"
      max="31"
      bind:value={date.day}
      required >
  </label>

  <label for="transaction--year">
    <input
      id="transaction--year"
      type="number"
      step="1"
      bind:value={date.year}
      required >
  </label>

  <label for="transaction--description">
    Description
    <input
      id="transaction--description"
      type="text"
      bind:value={description} >
  </label>

</form>


<style>
  form {
    display: flex;
  }

  :global(.form-control) {
    text-align: left;
    flex: 0 1 auto;
  }
</style>
