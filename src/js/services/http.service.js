import * as _ from 'lodash';

/**
 * @const {String} API (Server API address)
 */
const API = '/provider';

/**
 * @const { Object } HEADERS (Default HTTP request header parameters)
 */
const HEADERS = {
  common: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  post: {
    'Content-Type': 'application/json'
  }
};

/**
 * @class HttpService work with server data
 */
export default class HttpService {
  /**
   * @constructor Service class
   *
   * @param {Object} $http (Angular HTTP service)
   */
  constructor ($http) {
    this.http = $http;
    _.merge(this.http.defaults.headers, HEADERS);
  }

  /**
   * @method add item on server
   *
   * @param {Object} data (Create data parameters)
   *
   * @return {Object}
   */
  addItem (data) {
    return this.http.post(API, data);
  }

  /**
   * @method delete item from server
   *
   * @param {int} id (Delete data ID)
   *
   * @return {Object}
   */
  delItem (id) {
    return this.http.delete(`${API}/${id}`);
  }

  /**
   * @method detect item by key field
   *
   * @param {Object} data (Filter data parameters)
   *
   * @return {Object}
   */
  detectItems (data) {
    return this.http.get(`${API}/detect`, { params: data });
  }

  /**
   * @method filter items on server
   *
   * @param {Object} data (Filter data parameters)
   *
   * @return {Object}
   */
  filterItems (data) {
    return this.http.get(API, { params: data });
  }

  /**
   * @method get item from server by ID
   *
   * @param {int} id (Get data ID)
   *
   * @return {Object}
   */
  getItem (id) {
    return this.http.get(`${API}/${id}`);
  }

  /**
   * @method get all items list from server
   *
   * @return {Object}
   */
  getItems () {
    return this.http.get(API);
  }

  /**
   * @method update item on server
   *
   * @param {Object} data (Create data parameters)
   * @param {int} id (Update data ID)
   *
   * @return {Object}
   */
  updateItem (data, id) {
    return this.http.put(`${API}/${id}`, data);
  }
}
