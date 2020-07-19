<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let editing = false;

  function toggleEditView() {
    editing = !editing;
    dispatch('edit', { editing });
  }
</script>

<button class="neutral" on:click={toggleEditView}>
  {#if !editing}
    <svg viewBox="0 0 50 50"><path d="M10.4,44.88,4.55,47.22A2,2,0,0,0,4,46.08H4a2.31,2.31,0,0,0-1.27-.59l2.37-5.91,2,.35.27,2.23a.5.5,0,0,0,.49.44l2,0Z" fill="#fcf4db"/><path d="M3.33,46.78a1.18,1.18,0,0,1,.25.83l-2,.8.79-2A1.73,1.73,0,0,1,3.33,46.78Z" fill="#424242"/><path d="M5.86,38.67,7.71,39a.5.5,0,0,1,.41.44l.24,2.2h1.93a.5.5,0,0,1,.48.38l.51,2.21L43.84,11.63,38.37,6.16ZM4,46.08a2,2,0,0,1,.51,1.14l5.85-2.34-.54-2.25-2,0a.5.5,0,0,1-.49-.44l-.27-2.23-2-.35L2.76,45.48A2.31,2.31,0,0,1,4,46.07ZM44.29,1.38a7.28,7.28,0,0,0-3.7,2.56L39.22,5.31l5.47,5.48L46,9.48c.09-.07,2.26-1.74,2.63-3.77a3.5,3.5,0,0,0-1.16-3.17A3.51,3.51,0,0,0,44.29,1.38ZM4.47,38.65l36.1-36.1A5.9,5.9,0,0,1,44.38.21a4.75,4.75,0,0,1,3.79,1.62,4.77,4.77,0,0,1,1.62,3.79,5.93,5.93,0,0,1-2.4,3.86l-1.33,1.33s0,0,0,0h0l-2.07,2.08s0,0,0,0h0L11.36,45.53l0,0a.24.24,0,0,1-.08.06.07.07,0,0,0-.05,0L.88,49.78a.51.51,0,0,1-.54-.12.48.48,0,0,1-.11-.53L4.36,38.82s0,0,0,0l.06-.08S4.45,38.66,4.47,38.65Zm-.89,9a1.18,1.18,0,0,0-.25-.83,1.73,1.73,0,0,0-1-.33l-.79,2Z" fill="#424242"/><path d="M40.59,3.94a7.28,7.28,0,0,1,3.7-2.56,3.51,3.51,0,0,1,3.17,1.16,3.5,3.5,0,0,1,1.16,3.17c-.37,2-2.54,3.7-2.63,3.77l-1.3,1.31L39.22,5.31Z" fill="#f9623e"/><path d="M43.84,11.63,11.28,44.2,10.77,42a.5.5,0,0,0-.48-.38H8.36l-.24-2.2A.5.5,0,0,0,7.71,39l-1.85-.29L38.37,6.16Z" fill="#03bfea"/></svg>
  {:else}
    <div class="close"></div>
  {/if}
</button>

<style>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f2f2f2;
    color: #424242;
  }

  svg {
    height: 20px;
  }

  .close {
    height: 20px;
    width: 20px;
    position: relative;
  }

  .close:before,
  .close:after {
    content: "";
    height: 2px;
    width: 100%;
    background: currentColor;
    border-radius: 2px;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -1px;
  }

  .close:before {
    transform: rotate(-45deg);
  }

  .close:after {
    transform: rotate(45deg);
  }
</style>
