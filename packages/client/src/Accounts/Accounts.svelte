<script>
  import accounts from './account-store.js';
  import Account from './Account.svelte';
</script>

{#each $accounts as acct (acct.id)}
  <Account {...acct} />
{/each}

<Account editing="true" />
