'use strict';

import Angular from 'angular';
import ConfigService from '../services/config.service';
import DialogboxComponent from '../dialogbox/dialogbox.component';
import HttpService from '../services/http.service';
import * as _ from 'lodash';
import 'angular-material';

/**
 * @function table component controller
 *
 * @param {Object} $scope (Table component controller scope)
 * @param {Object} $mdDialog (Angular material modal dialog object)
 * @param {Object} ConfigService (Configuration service)
 * @param {Object} HttpService (Http request service)
 */
function tableController ($scope, $mdDialog, ConfigService, HttpService) {
  this.config = ConfigService;
  this.dlg = $mdDialog;
  this.error = false;
  this.http = HttpService;
  this.scope = $scope;
  this.tableParams = ConfigService.getTableParams();
  this.isArrayData = data => _.isArray(data);
  this.getSortIcon = sort => sort === 'asc' ? '-up' : '-down';
  this.sortTableData = sortTable.bind(this);
  this.toKebabCase = id => _.kebabCase(id);
  this.updateTableData = updateData.bind(this);
  this.showDlg = showDlg.bind(this);
}

/**
 * @inject providers to table component
 */
tableController.$inject = ['$scope', '$mdDialog', 'ConfigService', 'HttpService'];

/**
 * @function show dialog box information
 *
 * @param {Object} $event (Button click event)
 * @param {Object} row (Table row data)
 * @param {String} type (Dialogbox type)
 */
function showDlg ($event, row, type) {
  const $scope = this.scope;
  const callback = this.updateTableData;
  const dlgParams = this.config.getDialogboxParams($scope, $event, callback);
  const item = this.config.getTableItem();

  $scope.dlgData = _.cloneDeep(row || item);
  $scope.dlgError = false;
  $scope.dlgType = _.cloneDeep(type);
  $scope.dlgView = _.cloneDeep(this.tableParams.view);
  this.dlg.show(dlgParams);
}

/**
 * @function sort table data
 *
 * @param {String} field (Sort field name)
 */
function sortTable (field) {
  const params = this.tableParams;
  const view = params.view;
  const param = _.find(view, { field: field });
  const sort = param.sort || 'desc';

  view.forEach(item => item.sort = '');
  param.sort = sort === 'asc' ? 'desc' : 'asc';
  params.data = _.orderBy(params.data, [field], [param.sort]);
}

/**
 * @function update table data
 *
 * @param {Boolean} filter (Enable or disable filter)
 */
function updateData (filter = false) {
  const method = filter ? 'filterItems' : 'getItems';
  const params = this.tableParams;
  const data = _.pickBy(params.filter, val => val !== '');

  this.http[method](data)
    .then(res => {
      this.error = false;
      params.data = res.data;
    })
    .catch(() => this.error = true);
}

/**
 * @export table component
 */
export default Angular
  .module('app.table', ['ngMaterial', DialogboxComponent])
  .component('appTable', {
    template: require('./table.component.html'),
    controller: tableController
  })
  .service('ConfigService', ConfigService)
  .service('HttpService', ['$http', HttpService])
  .name;
