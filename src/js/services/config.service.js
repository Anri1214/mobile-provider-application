import Angular from 'angular';

/**
 * @class ConfigService for work with application parameters
 */
export default class ConfigService {
  /**
   * @method get detect parameters
   *
   * @return {Object}
   */
  getDetectParams () {
    return {
      data: {
        spn: '',
        imsi: ''
      },
      view: [
        { field: 'spn', label: 'SPN' },
        { field: 'imsi', label: 'IMSI' }
      ]
    };
  }

  /**
   * @method get dalogbox view parameters
   *
   * @param {Object} $scope (Dialogbox scope)
   * @param {Object} $event (Target event)
   * @param {Function} callback (Dialogbox on close callback)
   *
   * @return {Object}
   */
  getDialogboxParams ($scope, $event, callback = () => {}) {
    return {
      clickOutsideToClose: false,
      disableParentScroll: true,
      focusOnOpen: false,
      onRemoving: callback,
      parent: Angular.element(document.body),
      preserveScope: true,
      scope: $scope,
      targetEvent: $event,
      template: `<app-dialogbox dlg-data="dlgData"
                                dlg-error="dlgError"
                                dlg-type="dlgType"
                                dlg-view="dlgView">
                 </app-dialogbox>`
    };
  }

  /**
   * @method get dialogbox toolbar parameters
   *
   * @return {Object}
   */
  getDialogboxToolbar () {
    return {
      add: 'Add New Item',
      del: 'Delete Item',
      edit: 'Edit Item',
      view: 'View Providers List'
    };
  }

  /**
   * @method get default empty table item
   *
   * @return {Object}
   */
  getTableItem () {
    return {
      providerName: '',
      mcc: '',
      mnc: '',
      spns: [],
      imsis: []
    };
  }

  /**
   * @method get default table parameters
   *
   * @return {Object}
   */
  getTableParams () {
    const params = {
      data: [],
      filter: {},
      view: [
        { filter: false, field: 'id', sort: 'asc', title: 'ID' },
        { filter: 'providerName', field: 'providerName', sort: '', title: 'Provider Name' },
        { filter: 'mcc', field: 'mcc', sort: '', title: 'MCC' },
        { filter: 'mnc', field: 'mnc', sort: '', title: 'MNC' },
        { filter: 'spn', field: 'spns', sort: '', title: 'SPNS' },
        { filter: 'imsi', field: 'imsis', sort: '', title: 'IMSIS' },
        { filter: false, field: 'action', sort: false, title: 'Action' }
      ]
    };

    params.filter = params.view.reduce((acc, item) => {
      if (item.filter) {
        acc[item.filter] = '';
      }

      return acc;
    }, {});

    return params;
  }
}
