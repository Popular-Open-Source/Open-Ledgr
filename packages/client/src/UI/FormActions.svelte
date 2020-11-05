<script>
  import { createEventDispatcher } from 'svelte';
  import { ts } from '../date-store.js';

  const dispatch = createEventDispatcher();

  export let del = 'Delete';
  export let save = 'Submit';
</script>

{#if del}
  <button
    class="erase"
    on:click="{() => dispatch('trash', true)}">
    {del}
  </button>
{/if}

{#if save}
  <button
    class="record"
    on:click="{() => dispatch('save', {ts: $ts})}">
    {save}
  </button>
{/if}
