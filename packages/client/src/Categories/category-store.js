import Store from '../Store'

const categories = new Store('categories', [
  {
    id: 'category1',
    name: 'Utilities',
    linkedAccounts: []
  }
])

export default categories.make()

