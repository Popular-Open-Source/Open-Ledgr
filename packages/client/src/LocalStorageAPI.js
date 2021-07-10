import API from './API'

export default class LocalStorageAPI extends API {

  constructor(name) {
    super()
    this.name = `openLedgr-${name}`
  }

  /**
   * @param {array} value
   */
  set(value) {
    localStorage.setItem(this.name, JSON.stringify(value))
  }

  /**
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