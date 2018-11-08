'use strict';

import angular from 'angular';

/**
 * Class representing a dialog functional service.
 */
class DialogService {
  /**
   * Initialize a service.
   * @ngInject
   * @param {Object} $mdDialog - Angular material modal dialog object.
   */
  constructor ($mdDialog) {
    this.mdDialog = $mdDialog;
  }

  /**
   * Close dialogbox window.
   */
  close () {
    this.mdDialog.hide();
  }

  /**
   * Show dialogbox window.
   * @param {Dialogbox} params - Dialogbox parameters.
   */
  show (params) {
    this.mdDialog.show({
      clickOutsideToClose: false,
      disableParentScroll: true,
      focusOnOpen: false,
      onRemoving: params.callback,
      parent: angular.element(document.body),
      preserveScope: true,
      scope: params.scope,
      targetEvent: params.event,
      template: `<app-dialogbox dialog-data="dialogData"
                                dialog-error="dialogError"
                                dialog-type="dialogType"
                                dialog-view="dialogView">
                 </app-dialogbox>`
    });
  }
}

export default DialogService;
