<script>
  import { ts } from '../date-store.js';
  import Input from '../UI/Input.svelte';

  export let id = 'account-' + $ts;
  export let name = 'Account Name';
  export let startingBalance = 0;
  export let currentBalance = startingBalance;
  export let icon = null;
  export let editing = false;
  export let creating = false;
</script>

{#if editing}

  <Input
    name="name"
    value={name}
    required />

  <Input
    name="startingBalance"
    label="Starting Balance"
    type="number"
    step=".01"
    min="0"
    value={startingBalance}
    required />


{:else}

  <div class="account" {id}>
    {#if icon}
      <span>icon here</span>
    {/if}
    <h2>{name}</h2>
    {#if currentBalance}
      <span>{currentBalance}</span>
    {/if}
  </div>

{/if}
