<script>
	export let name;
</script>

<nav>
  <img src="/lettermark.png" alt="Open Ledgr lettermark">
</nav>

<main>
	<h1>Hello {name}!</h1>
</main>

<style>
  nav {
    display: flex;
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
