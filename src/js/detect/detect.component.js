'use strict';

import Angular from 'angular';
import ConfigService from '../services/config.service';
import DialogboxComponent from '../dialogbox/dialogbox.component';
import HttpService from '../services/http.service';
import ValidateService from '../services/validate.service';
import * as _ from 'lodash';
import 'angular-material';

/**
 * @function detect component controller
 *
 * @param {Object} $scope (Table component controller scope)
 * @param {Object} $mdDialog (Angular material modal dialog object)
 * @param {Object} ConfigService (Configuration service)
 * @param {Object} HttpService (Http request service)
 * @param {Object} ValidateService (Validation service)
 */
function detectController ($scope, $mdDialog, ConfigService, HttpService, ValidateService) {
  this.config = ConfigService;
  this.dlg = $mdDialog;
  this.http = HttpService;
  this.rules = ValidateService.getRules();
  this.scope = $scope;
  this.detectParams = ConfigService.getDetectParams();
  this.detectProvider = detectProvider.bind(this);
  this.showResult = showDlg.bind(this);
  this.validateData = () => ValidateService.isValidData(this.detectParams.data);
}

/**
 * @inject providers to detect component
 */
detectController.$inject = ['$scope', '$mdDialog', 'ConfigService', 'HttpService', 'ValidateService'];

/**
 * @function detect provider list
 *
 * @param {Object} $event (Button click event)
 */
function detectProvider ($event) {
  this.http.detectItems(this.detectParams.data)
    .then(res => {
      this.showResult($event, res.data, 'view');
    })
    .catch(() => {
      this.scope.dlgError = true;
      this.showResult($event, [], 'view');
    });
}

/**
 * @function show dialog box information
 *
 * @param {Object} $event (Button click event)
 * @param {Array} data (Dialogbox data)
 * @param {String} type (Dialogbox type)
 */
function showDlg ($event, data, type) {
  const $scope = this.scope;
  const dlgParams = this.config.getDialogboxParams($scope, $event);

  $scope.dlgData = _.cloneDeep(data);
  $scope.dlgType = _.cloneDeep(type);
  $scope.dlgView = _.cloneDeep(this.detectParams.view);
  this.dlg.show(dlgParams);
}

/**
 * @export detect component
 */
export default Angular
  .module('app.detect', ['ngMaterial', DialogboxComponent])
  .component('appDetect', {
    template: require('./detect.component.html'),
    controller: detectController
  })
  .service('ConfigService', ConfigService)
  .service('HttpService', ['$http', HttpService])
  .service('ValidateService', ValidateService)
  .name;
