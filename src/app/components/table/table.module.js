'use strict';

import angular from 'angular';
import ApiProviderService from '../../shared/api.provider.service';
import ConfigService from '../../shared/config.service';
import DialogService from '../../shared/dialog.service';
import TableComponent from './table.component';
import ValidateService from '../../shared/validate.service';

/**
 * @constant {String} TableModule
 */
const TableModule = angular
  .module('app.table', [])
  .component('appTable', TableComponent)
  .service('ApiProviderService', ApiProviderService)
  .service('ConfigService', ConfigService)
  .service('DialogService', DialogService)
  .service('ValidateService', ValidateService)
  .name;

export default TableModule;
