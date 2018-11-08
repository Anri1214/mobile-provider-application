/**
 * Class representing a application configuration service.
 */
class ConfigService {
  /**
   * Get detect providers parameters.
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
   * Get dialogbox parameters.
   * @return {Object}
   */
  getDialogboxParams () {
    return {
      add: {
        toolbar: 'Add New Item',
        type: 'add'
      },
      del: {
        toolbar: 'Delete Item',
        type: 'del'
      },
      edit: {
        toolbar: 'Edit Item',
        type: 'edit'
      },
      view: {
        toolbar: 'View Providers List',
        type: 'view'
      }
    };
  }

  /**
   * Get default empty table item.
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
   * Get default table parameters.
   * @return {Object}
   */
  getTableParams () {
    const params = {
      data: [],
      filter: {},
      view: [
        { filter: false, field: 'num', sort: 'asc', title: '№' },
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

export default ConfigService;
