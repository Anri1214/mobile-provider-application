'use strict';

import angular from 'angular';
import NavbarComponent from './navbar.component';

/**
 * @constant {String} NavbarModule
 */
const NavbarModule = angular
  .module('app.navbar', [])
  .component('appNavbar', NavbarComponent)
  .name;

export default NavbarModule;
