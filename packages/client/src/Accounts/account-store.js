import { writable } from 'svelte/store';

function accounts() {
  const accountStore = writable(
    [
      {
        id: 'account1',
        name: 'Basic Ledgr',
        startingBalance: 0,
        currentBalance: 0,
        displayCodeNum: true,
        icon: false
      }
    ]
  );

  return {
    subscribe: accountStore.subscribe,

    add: account => {
      accountStore.update(accounts => {
        return [...accounts, account];
      });
    },
    update: account => {
      accountStore.update(accounts => {
        return accounts.map(acct => {
          if (acct.id === account.id) {
            return account;
          }

          return acct;
        });
      });
    },
    delete: id => {
      accountStore.update(accounts => {
        return accounts.filter(acct => acct.id !== id);
      });
    }
  }
}

export default accounts();
