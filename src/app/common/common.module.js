'use strict';

import angular from 'angular';
import FooterModule from './footer/footer.module';
import NavbarModule from './navbar/navbar.module';

/**
 * @constant {String} CommonModule
 */
const CommonModule = angular
  .module('app.common', [
    NavbarModule,
    FooterModule
  ])
  .name;

export default CommonModule;
