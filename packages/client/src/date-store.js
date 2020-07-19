import { readable, derived } from 'svelte/store';

export const time = readable(new Date(), set => {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return () => clearInterval(interval);
});

export const today = derived(time, ($time) => {
    return {
      month: $time.getMonth() + 1,
      day: $time.getDate(),
      year: $time.getFullYear()
    }
  }
);

export const ts = readable(Date.now(), set => {
  const interval = setInterval(() => {
    set(Date.now());
  }, 1000);

  return () => clearInterval(interval);
});
