'use strict';

import * as _ from 'lodash';

/**
 * Class representing a table component controller.
 */
class TableController {
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
    this.dialogboxParams = this.config.getDialogboxParams();
    this.error = false;
    this.isArrayData = this.validate.isArrayData;
    this.tableParams = this.config.getTableParams();
  }

  /**
   * Get sort icon for button.
   * @param {String} sort - Sort direction.
   * @return {String}
   */
  getSortIcon (sort) {
    return sort === 'asc' ? '-up' : '-down';
  }

  /**
   * Show table row information in dialogbox.
   * @param {Event} $event - Button click event.
   * @param {Provider} row - Table row data.
   * @param {String} type - Dialogbox type.
   */
  showInfo ($event, row, type) {
    const $scope = this.scope;
    const item = this.config.getTableItem();

    $scope.dialogData = _.cloneDeep(row || item);
    $scope.dialogError = false;
    $scope.dialogType = type;
    $scope.dialogView = this.tableParams.view;
    this.dialog.show({
      callback: this.updateTable.bind(this),
      event: $event,
      scope: $scope
    });
  }

  /**
   * Sort table data.
   * @param {String} field - Sort field name.
   */
  sortTable (field) {
    const params = this.tableParams;
    const view = params.view;
    const param = _.find(view, { field: field });
    const sort = param.sort || 'desc';

    view.forEach(item => item.sort = '');
    param.sort = sort === 'asc' ? 'desc' : 'asc';
    params.data = _.orderBy(params.data, [field], [param.sort]);
  }

  /**
   * Convert field name to kebab case style.
   * @param {String} field - Convert field name.
   * @return {String}
   */
  toKebabCase (field) {
    return _.kebabCase(field);
  }

  /**
   * Update table data.
   * @param {Boolean} filter - Enable or disable filter.
   */
  updateTable (filter = false) {
    const method = filter ? 'filterItems' : 'getItems';
    const params = this.tableParams;
    const data = _.pickBy(params.filter, val => val !== '');

    this.api[method](data)
      .then(res => {
        this.error = false;
        params.data = res.data.map((item, index) => {
          item.num = index + 1;

          return item;
        });

      })
      .catch(() => this.error = true);
  }
}

export default TableController;
