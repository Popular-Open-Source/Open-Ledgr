<script>
  import AccountForm from './AccountForm.svelte';
  import Edit from '../UI/Edit.svelte';

  export let account;

  let editing = false;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  $: balance = formatter.format(account.currentBalance);
</script>

<div class="account" id={account.id}>
  <Edit {editing} on:edit={() => editing = !editing} />

  {#if editing}
    <AccountForm
      {...account}
      on:route
      on:accountUpdated={() => editing = false}
      on:accountDeleted />
  {/if}

  <p>{balance}</p>

</div>

<style>
  .account :global(.edit) {
    margin-left: auto;
  }
</style>
