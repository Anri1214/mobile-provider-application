'use strict';

import Angular from 'angular';
import ConfigService from '../services/config.service';
import HttpService from '../services/http.service';
import ValidateService from '../services/validate.service';
import * as _ from 'lodash';
import 'angular-aria';
import 'angular-animate';
import 'angular-messages';
import 'angular-material';

/**
 * @function dialogbox component controller
 *
 * @param {Object} $mdDialog (Angular material modal dialog object)
 * @param {Object} ConfigService (Configuration service)
 * @param {Object} HttpService (Http request service)
 * @param {Object} ValidateService (Validation service)
 */
function dialogboxController ($mdDialog, ConfigService, HttpService, ValidateService) {
  this.http = HttpService;
  this.rules = ValidateService.getRules();
  this.toolbar = ConfigService.getDialogboxToolbar();
  this.addItem = item => item.push('');
  this.closeDialog = () => $mdDialog.hide();
  this.delData = delData.bind(this);
  this.delItem = (item, index) => item.splice(index, 1);
  this.getTitle = getTitle.bind(this);
  this.isArrayData = data => _.isArray(data);
  this.isEmptyData = data => _.isEmpty(data);
  this.saveData = saveData.bind(this);
  this.validateData = () => ValidateService.isValidData(this.dlgData);
}

/**
 * @inject providers to dialogbox component
 */
dialogboxController.$inject = ['$mdDialog', 'ConfigService', 'HttpService', 'ValidateService'];

/**
 * @function remove dialogbox data
 */
function delData () {
  this.http.delItem(this.dlgData.id)
    .then(() => this.closeDialog())
    .catch(() => this.dlgError = true);
}

/**
 * @function get dialogbox field title
 *
 * @param {String} key (Field key)
 *
 * @return {Object}
 */
function getTitle (key) {
  const title = _.find(this.dlgView, { field: key }).title;
  const isArray = this.isArrayData(this.dlgData[key]);

  return isArray ? title.slice(0, -1) : title;
}

/**
 * @function save dialogbox data
 */
function saveData () {
  const method = this.dlgType === 'add' ? 'addItem' : 'updateItem';

  this.http[method](this.dlgData)
    .then(() => this.closeDialog())
    .catch(() => this.dlgError = true);
}

/**
 * @export dialogbox component
 */
export default Angular
  .module('app.dialogbox', ['ngMaterial', 'ngMessages'])
  .component('appDialogbox', {
    template: require('./dialogbox.component.html'),
    controller: dialogboxController,
    bindings: {
      dlgData: '=',
      dlgError: '=',
      dlgType: '=',
      dlgView: '='
    }
  })
  .service('ConfigService', ConfigService)
  .service('HttpService', ['$http', HttpService])
  .service('ValidateService', ValidateService)
  .name;
