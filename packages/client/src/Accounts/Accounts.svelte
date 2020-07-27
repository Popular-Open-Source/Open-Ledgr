<script>
  import { createEventDispatcher } from 'svelte';
  import { toSlug } from '../utility.js';
  import accounts from './account-store.js';
  import Account from './Account.svelte';
  import AccountForm from './AccountForm.svelte';

  const dispatch = createEventDispatcher();
  const account = {
    name: 'Account Name',
    startingBalance: 0,
    displayCodeNum: true,
    icon: false
  };

  let selected;
  let creating;

  function resetDefaults(event) {
    creating = false;
    selected = false;
  }

  function selectAccount(account) {
    selected = account.id;

    dispatch('route', {
      title: account.name
    });

    creating = false;
  }
</script>

<div class="accounts">
  {#each $accounts as accnt (accnt.id)}

    <div class="account" id={account.id}>
      {#if !selected}
        <h3>
          <a
            href={() => toSlug(accnt.name)}
            on:click|preventDefault={() => selectAccount(accnt)}>
            {accnt.name}
            </a>
        </h3>
      {:else if selected === accnt.id}
        <Account
          account={accnt}
          on:accountDeleted={resetDefaults}
          on:route />
      {/if}
    </div>

  {/each}
</div>

{#if !selected}
  {#if !creating}

    <button
      class="record"
      on:click={() => creating = !creating}>
      + Add Account
    </button>

  {:else}

    <AccountForm
      {...account}
      on:accountCreated={resetDefaults}
      on:cancelCreate={resetDefaults} />

  {/if}
{/if}
