'use strict';

import angular from 'angular';
import ApiProviderService from '../../shared/api.provider.service';
import ConfigService from '../../shared/config.service';
import DialogboxComponent from './dialogbox.component';
import DialogboxService from '../../shared/dialog.service';
import ValidateService from '../../shared/validate.service';
import 'angular-aria';
import 'angular-animate';
import 'angular-messages';
import 'angular-material';

/**
 * @constant {String} DialogboxModule
 */
const DialogboxModule = angular
  .module('app.dialogbox', ['ngMaterial'])
  .component('appDialogbox', DialogboxComponent)
  .service('ApiProviderService', ApiProviderService)
  .service('ConfigService', ConfigService)
  .service('DialogboxService', DialogboxService)
  .service('ValidateService', ValidateService)
  .name;

export default DialogboxModule;
