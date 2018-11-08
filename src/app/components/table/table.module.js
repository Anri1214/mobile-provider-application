'use strict';

import angular from 'angular';
import ApiProviderService from '../../shared/services/api.provider.service';
import ConfigService from '../../shared/services/config.service';
import DialogService from '../../shared/services/dialog.service';
import TableComponent from './table.component';
import ValidateService from '../../shared/services/validate.service';

/**
 * @const {String} TableModule
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
