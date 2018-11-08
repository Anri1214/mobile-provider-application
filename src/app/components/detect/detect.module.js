'use strict';

import angular from 'angular';
import ApiProviderService from '../../shared/api.provider.service';
import ConfigService from '../../shared/config.service';
import DetectComponent from './detect.component';
import DialogService from '../../shared/dialog.service';
import ValidateService from '../../shared/validate.service';

/**
 * @constant {String} DetectModule
 */
const DetectModule = angular
  .module('app.detect', [])
  .component('appDetect', DetectComponent)
  .service('ApiProviderService', ApiProviderService)
  .service('ConfigService', ConfigService)
  .service('DialogService', DialogService)
  .service('ValidateService', ValidateService)
  .name;

export default DetectModule;
