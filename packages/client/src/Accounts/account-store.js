import Store from '../Store'

const accounts = new Store('accounts', [
  {
    id: 'account1',
    name: 'Basic Ledgr',
    startingBalance: 0,
    currentBalance: 0,
    displayCodeNum: true,
    icon: false
  }
])

export default accounts.make()
