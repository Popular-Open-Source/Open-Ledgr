import { writable } from 'svelte/store';

function createRecord() {
  const records = writable([]);

  return {
    subscribe: records.subscribe,
    add: item => {
      records.update(items => {
        return [...items, item];
      });
    }
  }
}
