<script>
  import accounts from './account-store.js'
  import Account from './Account.svelte'

  let detail

  function selectAccount(account) {
    detail = account
  }
</script>

{#if !detail}

  <div class="accounts">
    {#each $accounts as accnt (accnt.id)}
      <div class="account">
        <h3 on:click={selectAccount(accnt)}>
          {accnt.name}
        </h3>
      </div>
    {/each}
  </div>

{:else}

  <Account
    {...detail}
    on:close={() => detail = null}  />

{/if}
