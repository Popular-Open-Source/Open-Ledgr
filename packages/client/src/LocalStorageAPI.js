import API from './API'

/**
 * Store Ledgr information in a localStorage object.
 */
export default class LocalStorageAPI extends API {

  constructor(name) {
    super()
    this.name = `openLedgr-${name}`
  }

  /**
   * Set a value to localStorage.
   *
   * @param {array} value
   */
  set(value) {
    localStorage.setItem(this.name, JSON.stringify(value))
  }

  /**
   * Get the data from localStorage.
   *
   * @return {?array}
   */
  get() {
    try {
      const data = localStorage.getItem(this.name)

      return JSON.parse(data)
    } catch (err) {
      console.log(err)

      return null
    }
  }

}
