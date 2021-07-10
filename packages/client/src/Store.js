import { get, writable } from 'svelte/store'
import LocalStorageAPI from './LocalStorageAPI'

/**
 * Create a new store object
 */
export default class Store {

  constructor(name, initial, key) {
    this.key = key || 'id'
    this.initial = initial
    this.name = name
    this.api = new LocalStorageAPI(name)
  }

  /**
   * Assign a Svelte store to this.store.
   */
  setupStore() {
    const storage = this.api.get()
    let data

    if (!storage) {
      data = this.initial

      this.api.set(data)
    } else {
      data = storage
    }

    this.store = writable(data)
  }

  /**
   * Update the data in the API if possible. If successfully
   * resolved, update the store.
   *
   * @todo add promise catch block
   *
   * @param {mixed} params
   * @param {function} callback
   */
  updateAPI(params, callback) {
    (new Promise((resolve, reject) => {
      try {
        const data = get(this.store)
        const newData = callback(data, params)

        this.api.set(newData)

        resolve(newData)
      } catch (err) {
        console.log(err)

        reject(false)
      }
    })).then(data => {
      this.store.set(data)
    })
  }

  /**
   * Add an item to the store data.
   *
   * @param {array} data
   * @param {object} val
   */
  addItem(data, val) {
    val[this.key] = this.name + Date.now()

    return [...data, val]
  }

  /**
   * Update an item located in a store by the
   * main identifying key of the store.
   *
   * @param {array} data
   * @param {object} val
   */
  updateItem(data, val) {
    return data.map(item => {
      if (item[this.key] === val[this.key]) {
        return val
      }

      return item
    })
  }

  /**
   * Delete an item in the store.
   *
   * @param {array} data
   * @param {string} key
   */
  deleteItem(data, key) {
    return data.filter(item => item[this.key] !== key)
  }

  /**
   * Make the store. Return an object capable of updating
   * data from an API and then the store itself.
   */
  make() {
    this.setupStore()

    return {
      subscribe: this.store.subscribe,
      add: item => {
        this.updateAPI(item, this.addItem.bind(this))
      },
      update: item => {
        this.updateAPI(item, this.updateItem.bind(this))
      },
      delete: key => {
        this.updateAPI(key, this.deleteItem.bind(this))
      }
    }
  }
}
