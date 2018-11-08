'use strict';

import * as _ from 'lodash';

/**
 * Class representing a dialogbox component controller.
 */
class DialogboxController {
  /**
   * Initialize the controller.
   * @ngInject
   * @param {Object} ApiProviderService - Api provider HTTP request service.
   * @param {Object} ConfigService - Configuration service.
   * @param {Object} DialogService - Dialogbox functional service.
   * @param {Object} ValidateService - Validation service.
   */
  constructor (ApiProviderService, ConfigService, DialogService, ValidateService) {
    this.api = ApiProviderService;
    this.config = ConfigService;
    this.dialog = DialogService;
    this.validate = ValidateService;
  }

  /**
   * Initialize lifecycle hooks.
   */
  $onInit () {
    this.isArrayData = this.validate.isArrayData;
    this.isEmptyData = this.validate.isEmptyData;
    this.params = this.config.getDialogboxParams();
    this.rules = this.validate.getRules();
  }

  /**
   * Close dialogbox window.
   */
  closeDialog () {
    this.dialog.close();
  }

  /**
   * Confirm delete data.
   */
  delData () {
    this.api.delItem(this.dialogData.id)
      .then(() => this.closeDialog())
      .catch(() => this.dialogError = true);
  }

  /**
   * Get dialogbox field title.
   * @param {String} key - Dialogbox data field key.
   * @return {String}
   */
  getTitle (key) {
    const title = _.find(this.dialogView, { field: key }).title;
    const isArray = this.isArrayData(this.dialogData[key]);

    return isArray ? title.slice(0, -1) : title;
  }

  /**
   * Get dialogbox toolbar.
   * @return {String}
   */
  getToolbar () {
    return this.params[this.dialogType].toolbar;
  }

  /**
   * Confirm save data.
   */
  saveData () {
    const data = this.dialogData;
    const save = this.config.getTableItem();
    const keys = _.keys(save);
    const method = this.dialogType === 'add' ? 'addItem' : 'updateItem';

    _.assign(save, _.pick(data, keys));
    this.api[method](save, data.id)
      .then(() => this.closeDialog())
      .catch(() => this.dialogError = true);
  }

  /**
   * Validate dialogbox data parameters.
   * @return {Boolean}
   */
  validateData () {
    return this.validate.isValidData(this.dialogData);
  }
}

export default DialogboxController;
