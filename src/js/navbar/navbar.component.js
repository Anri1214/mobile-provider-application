'use strict';

import Angular from 'angular';

/**
 * @function navbar component controller
 */
function navbarController () {
  this.title = 'Mobile Provider Application';
}

/**
 * @export navbar component
 */
export default Angular
  .module('app.navbar', [])
  .component('appNavbar', {
    template: require('./navbar.component.html'),
    controller: navbarController
  })
  .name;
