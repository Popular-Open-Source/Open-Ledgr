import { writable } from 'svelte/store';

function categories() {
  const categoryStore = writable(
    [
      {
        id: 'category1',
        name: 'Utilities',
        accounts: []
      }
    ]
  );

  return {
    subscribe: categoryStore.subscribe,
    add: category => {
      categoryStore.update(categories => {
        return [...categories, category];
      });
    },
    update: category => {
      categoryStore.update(categories => {
        return categories.map(cat => {
          if (cat.id === category.id) {
            return category;
          }

          return cat;
        });
      });
    },
    delete: id => {
      categoryStore.update(categories => {
        return categories.filter(cat => cat.id !== id);
      });
    }
  }
}

export default categories();

