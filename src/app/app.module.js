'use strict';

import angular from 'angular';
import AppComponent from './app.component';
import CommonModule from './common/common.module';
import ComponentsModule from './components/components.module';

/**
 * @constant {String} AppModule
 */
const AppModule = angular
  .module('app', [
    CommonModule,
    ComponentsModule
  ])
  .component('app', AppComponent)
  .name;

export default AppModule;
