/**
 * Class representing a API provider service.
 */
class ApiProviderService {
  /**
   * Initialize a service.
   * @param {Object} $http - Angular HTTP service.
   */
  constructor ($http) {
    this.http = $http;
    this.url = '/provider';
  }

  /**
   * Add item on server.
   * @param {Object} data - Create data parameters.
   * @return {Promise}
   */
  addItem (data) {
    return this.http.post(this.url, data);
  }

  /**
   * Delete item from server.
   * @param {int} id - Delete data ID.
   * @return {Promise}
   */
  delItem (id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  /**
   * Detect item by key field.
   * @param {Object} data - Filter data parameters.
   * @return {Promise}
   */
  detectItems (data) {
    return this.http.get(`${this.url}/detect`, { params: data });
  }

  /**
   * Filter items on server.
   * @param {Object} data - Filter data parameters.
   * @return {Promise}
   */
  filterItems (data) {
    return this.http.get(this.url, { params: data });
  }

  /**
   * Get item from server by ID.
   * @param {int} id - Get data ID.
   * @return {Promise}
   */
  getItem (id) {
    return this.http.get(`${this.url}/${id}`);
  }

  /**
   * Get all items list from server.
   * @return {Promise}
   */
  getItems () {
    return this.http.get(this.url);
  }

  /**
   * Update item on server.
   * @param {Object} data - Create data parameters.
   * @param {int} id - Update data ID.
   * @return {Promise}
   */
  updateItem (data, id) {
    return this.http.put(`${this.url}/${id}`, data);
  }
}

ApiProviderService.$inject = ['$http'];

export default ApiProviderService;
