<script>
  import Lettermark from './Branding/Lettermark.svelte'
  import LedgrItem from './LedgrItem/LedgrItem.svelte'
  import Accounts from './Accounts/Accounts.svelte'
  import Categories from './Categories/Categories.svelte'

  const routes = [
    {
      label: 'Accounts',
      component: Accounts
    },
    {
      label: 'Categories',
      component: Categories
    }
  ]

  let currentPage = Accounts
</script>

<header class="bg-dark text-white shadow">
  <nav>
    <Lettermark theme="light" />

    <ul>
      {#each routes as route}
        <li>
          <label>
            <input
              name="currentPage"
              class="sr-only"
              type="radio"
              value={route.component}
              bind:group={currentPage}>
            {route.label}
          </label>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<main>
  <svelte:component this={currentPage}/>
</main>

<style>
  header {
    padding: 15px;
  }

  nav {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }

  nav li {
    list-style: none;
    display: inline-block;
    margin: 0 1em;
    cursor: pointer;
    color: #fff;
  }

  img {
    height: 60px;
    width: auto;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 10px auto;
    max-width: 1200px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
