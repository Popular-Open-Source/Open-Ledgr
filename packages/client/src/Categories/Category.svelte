<script>
  import { ts } from '../date-store.js';

  export let id = 'category-' + $ts;
  export let name = 'Category Name';
  export let accounts = [];
</script>

<div class="category" {id}>
  <h3>{name}</h3>
</div>
