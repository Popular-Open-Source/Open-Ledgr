<script>
  import { today } from '../date-store.js';

  import Input from '../UI/Input.svelte';
  import Select from '../UI/Select.svelte';

  let transactionTypes = [
    {
      value: 'debit',
      label: 'Debit / Withdrawal'
    },
    {
      value: 'credit',
      label: 'Credit / Deposit'
    }
  ];
</script>

<form>

  <div class="form-control">
    <Input
      name="amount"
      label="Amount"
      type="number"
      step=".01"
      min="0"
      value="0"
      required />
  </div>

  <div class="form-control">
    <Select
      name="type"
      label="Transaction Type"
      options={transactionTypes}
      required />
  </div>

  <div class="form-control">
    <Input
      name="month"
      label="Month"
      value={$today.month}
      type="number"
      min="1"
      max="12"
      required />
  </div>

  <div class="form-control">
    <Input
      name="day"
      label="Day"
      type="number"
      min="1"
      max="31"
      value={$today.day}
      required />
  </div>

  <div class="form-control">
    <Input
      name="year"
      label="Year"
      type="number"
      value={$today.year}
      required />
  </div>

  <div class="form-control">
    <Input
      name="description"
      label="Description"
      value="" />
  </div>

</form>

<style>
  form {
    display: flex;
  }

  :global(.form-control) {
    text-align: left;
    flex: 0 1 auto;
  }
</style>
