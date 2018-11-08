'use strict';

import * as _ from 'lodash';

/**
 * Class representing a detect component controller.
 */
class DetectController {
  /**
   * Initialize the controller.
   * @ngInject
   * @param {Object} $scope - Table component controller scope.
   * @param {Object} ApiProviderService - Api provider HTTP request service.
   * @param {Object} ConfigService - Configuration service.
   * @param {Object} DialogService - Dialogbox functional service.
   * @param {Object} ValidateService - Validation service.
   */
  constructor ($scope, ApiProviderService, ConfigService, DialogService, ValidateService) {
    this.api = ApiProviderService;
    this.config = ConfigService;
    this.dialog = DialogService;
    this.scope = $scope;
    this.validate = ValidateService;
  }

  /**
   * Initialize lifecycle hooks.
   */
  $onInit () {
    this.detectParams = this.config.getDetectParams();
    this.dialogboxParams = this.config.getDialogboxParams();
    this.rules = this.validate.getRules();
  }

  /**
   * Detect provider list.
   * @param {Event} $event - Button click event.
   */
  detectProvider ($event) {
    this.api.detectItems(this.detectParams.data)
      .then(res => {
        this.scope.dialogError = false;
        this.showResult($event, res.data);
      })
      .catch(() => {
        this.scope.dialogError = true;
        this.showResult($event);
      });
  }

  /**
   * Show detect information in dialogbox.
   * @param {Event} $event - Button click event.
   * @param {Object} data - Detect provider data.
   */
  showResult ($event, data = {}) {
    const $scope = this.scope;

    $scope.dialogData = _.cloneDeep(data);
    $scope.dialogType = this.dialogboxParams.view.type;
    $scope.dialogView = this.detectParams.view;
    this.dialog.show({
      callback: () => {},
      event: $event,
      scope: $scope
    });
  }

  /**
   * Validate detect data parameters.
   * @return {Boolean}
   */
  validateData () {
    return this.validate.isValidData(this.detectParams.data);
  }
}

export default DetectController;
