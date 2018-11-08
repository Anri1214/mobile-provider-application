'use strict';

import angular from 'angular';
import ApiProviderService from '../../shared/services/api.provider.service';
import ConfigService from '../../shared/services/config.service';
import DetectComponent from './detect.component';
import DialogService from '../../shared/services/dialog.service';
import ValidateService from '../../shared/services/validate.service';

/**
 * @const {String} DetectModule
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
