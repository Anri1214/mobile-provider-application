'use strict';

import DialogboxController from './dialogbox.controller';

/**
 * @constant {Object} DialogboxComponent
 */
const DialogboxComponent = {
  controller: DialogboxController,
  template: require('./dialogbox.component.html'),
  bindings: {
    dialogData: '=',
    dialogError: '=',
    dialogType: '=',
    dialogView: '='
  }
};

export default DialogboxComponent;
