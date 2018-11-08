'use strict';

import angular from 'angular';
import FooterComponent from './footer.component';

/**
 * @const {String} FooterModule
 */
const FooterModule = angular
  .module('app.footer', [])
  .component('appFooter', FooterComponent)
  .name;

export default FooterModule;
