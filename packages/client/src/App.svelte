<script>
  import Lettermark from './Branding/Lettermark.svelte';
  import LedgrItem from './LedgrItem/LedgrItem.svelte';
  import Accounts from './Accounts/Accounts.svelte';
  import Categories from './Categories/Categories.svelte';

  export let name;
</script>

<nav>
  <Lettermark />
</nav>

<main>
  <h1>Hello {name}!</h1>
  <Accounts />
  <Categories />
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
