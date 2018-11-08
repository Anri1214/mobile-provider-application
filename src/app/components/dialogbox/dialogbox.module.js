'use strict';

import angular from 'angular';
import ApiProviderService from '../../shared/services/api.provider.service';
import ConfigService from '../../shared/services/config.service';
import DialogboxComponent from './dialogbox.component';
import DialogboxService from '../../shared/services/dialog.service';
import ValidateService from '../../shared/services/validate.service';
import 'angular-aria';
import 'angular-animate';
import 'angular-messages';
import 'angular-material';

/**
 * @const {String} DialogboxModule
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
