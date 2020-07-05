<script>
  import { ts } from '../date-store.js';

  export let name;
  export let label = '';
  export let id = name + '-' + $ts;
  export let required = null;
  export let options = null;
</script>

<label for={id}>{label}</label>

<select {id} {name} {required}>
  {#each options as opt}
    <option value={opt.value}>{opt.label}</option>
  {/each}
</select>
