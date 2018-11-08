import ConfigService from '../services/config.service';

/**
 * @class ApiProviderService work with server data
 */
export default class ApiProviderService {
  /**
   * @constructor Service class
   *
   * @param {Object} $http (Angular HTTP service)
   */
  constructor ($http) {
    const config = new ConfigService();

    this.address = config.getApiServiceAddress();
    this.http = $http;
  }

  /**
   * Add item on server
   *
   * @param {Object} data (Create data parameters)
   *
   * @return {Promise}
   */
  addItem (data) {
    return this.http.post(this.address, data);
  }

  /**
   * Delete item from server
   *
   * @param {int} id (Delete data ID)
   *
   * @return {Promise}
   */
  delItem (id) {
    return this.http.delete(`${this.address}/${id}`);
  }

  /**
   * Detect item by key field
   *
   * @param {Object} data (Filter data parameters)
   *
   * @return {Promise}
   */
  detectItems (data) {
    return this.http.get(`${this.address}/detect`, { params: data });
  }

  /**
   * Filter items on server
   *
   * @param {Object} data (Filter data parameters)
   *
   * @return {Promise}
   */
  filterItems (data) {
    return this.http.get(this.address, { params: data });
  }

  /**
   * Get item from server by ID
   *
   * @param {int} id (Get data ID)
   *
   * @return {Promise}
   */
  getItem (id) {
    return this.http.get(`${this.address}/${id}`);
  }

  /**
   * Get all items list from server
   *
   * @return {Promise}
   */
  getItems () {
    return this.http.get(this.address);
  }

  /**
   * Update item on server
   *
   * @param {Object} data (Create data parameters)
   * @param {int} id (Update data ID)
   *
   * @return {Promise}
   */
  updateItem (data, id) {
    return this.http.put(`${this.address}/${id}`, data);
  }
}
