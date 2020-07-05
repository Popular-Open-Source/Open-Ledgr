<script>
  import { ts } from '../date-store.js';

  export let name;
  export let label = '';
  export let type = 'text';
  export let id = name + '-' + $ts;
  export let value = null;
  export let step = null;
  export let min = null;
  export let max = null;
  export let required = null;
</script>

<label for={id}>{label}</label>

<input
  {id}
  {type}
  {name}
  {value}
  {step}
  {min}
  {max}
  {required} >
