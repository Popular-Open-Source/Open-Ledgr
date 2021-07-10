<script>
  import { createEventDispatcher } from 'svelte';
  import AccountForm from './AccountForm.svelte'
  import Edit from '../UI/Edit.svelte'

  const dispatch = createEventDispatcher()

  export let id
  export let name
  export let startingBalance
  export let currentBalance
  export let displayCodeNum
  export let icon

  let editing = false

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  $: balance = formatter.format(currentBalance)
</script>

<div class="account">
  <header>
    <button on:click|preventDefault={() => dispatch('close')}>
      <i class="gg-arrow-left"></i>
    </button>
    <h1>{name}</h1>
    <Edit {editing} on:edit={() => editing = !editing} />
  </header>

  {#if editing}
    <AccountForm
      {name}
      {startingBalance}
      {currentBalance}
      {displayCodeNum}
      {icon}
      on:accountUpdated={() => editing = false}
      on:accountDeleted />
  {/if}

  <p>{balance}</p>

</div>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: end;
  }
</style>
