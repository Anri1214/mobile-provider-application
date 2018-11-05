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
        spns: '',
        imsi: ''
      },
      view: [
        { field: 'spns', label: 'SPNS' },
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
      imsi: []
    };
  }

  /**
   * @method get default table parameters
   *
   * @return {Object}
   */
  getTableParams () {
    return {
      data: [],
      view: [
        { filter: '', field: 'id', sort: 'asc', title: 'ID' },
        { filter: '', field: 'providerName', sort: '', title: 'Provider Name' },
        { filter: '', field: 'mcc', sort: '', title: 'MCC' },
        { filter: '', field: 'mnc', sort: '', title: 'MNC' },
        { filter: '', field: 'spns', sort: '', title: 'SPNS' },
        { filter: '', field: 'imsi', sort: '', title: 'IMSI' },
        { filter: false, field: 'action', sort: false, title: 'Action' }
      ]
    };
  }
}
