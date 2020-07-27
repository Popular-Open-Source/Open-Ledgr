<script>
  import Lettermark from './Branding/Lettermark.svelte';
  import LedgrItem from './LedgrItem/LedgrItem.svelte';
  import Accounts from './Accounts/Accounts.svelte';
  import Categories from './Categories/Categories.svelte';

  let view = '/';
  let title;

  function getViewDataFromEvent(event) {
    switch (event.type) {
      case 'click':
        handleClick(event.target);
        break;
      case 'route':
        handleRoute(event.detail);
        break;
    }
  }

  function handleClick(target) {
    const slug = target.getAttribute('href');

    if (slug) {
      title = target.textContent;
      view = slug;
    } else {
      title = '';
      view = '/';
    }
  }

  function handleRoute(detail) {
    if (detail.route) {
      view = detail.route;
    }

    if (detail.title) {
      title = detail.title;
    }
  }
</script>

<nav>
  <a href="/" on:click|preventDefault={getViewDataFromEvent}>
    <Lettermark />
  </a>

  {#if title}
    <h1>{title}</h1>
  {/if}
</nav>

<main>
  {#if view === '/'}

    <h2>
      <a href="/accounts" on:click|preventDefault={getViewDataFromEvent}>
        Accounts
      </a>
    </h2>

    <h2>
      <a href="/categories" on:click|preventDefault={getViewDataFromEvent}>
        Categories
      </a>
    </h2>

  {:else if view === '/accounts'}
    <Accounts on:route={getViewDataFromEvent} />
  {:else if view === '/categories'}
    <Categories on:route={getViewDataFromEvent} />
  {/if}
</main>

<style>
  nav {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

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

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
