'use strict';

import Angular from 'angular';

/**
 * @function footer component controller
 */
function footerController () {
  this.copyright = 'Created by ELEKS';
}

/**
 * @export footer component
 */
export default Angular
  .module('app.footer', [])
  .component('appFooter', {
    template: require('./footer.component.html'),
    controller: footerController
  })
  .name;
