<script>
  import Lettermark from './Branding/Lettermark.svelte';
  import LedgrItem from './LedgrItem/LedgrItem.svelte';
  import Accounts from './Accounts/Accounts.svelte';
  import Categories from './Categories/Categories.svelte';

  let view = '/home';

  function setRoute(event) {
    view = event.target.getAttribute('href') || '/home';
  }
</script>

<nav>
  <a href="/home" on:click|preventDefault={setRoute}>
    <Lettermark />
  </a>
</nav>

<main>
  {#if view === '/home'}

    <h2>
      <a href="/accounts" on:click|preventDefault={setRoute}>
        Accounts
      </a>
    </h2>

    <h2>
      <a href="/categories" on:click|preventDefault={setRoute}>
        Categories
      </a>
    </h2>

  {:else if view === '/accounts'}
    <Accounts />
  {:else if view === '/categories'}
    <Categories />
  {/if}
</main>

<style>
  img {
    height: 60px;
    width: auto;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
