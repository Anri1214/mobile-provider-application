'use strict';

import angular from 'angular';
import AppComponent from './app.component';
import CommonModule from './common/common.module';
import ComponentsModule from './components/components.module';
import './shared/common/types';

/**
 * @const {String} AppModule
 */
const AppModule = angular
  .module('app', [
    CommonModule,
    ComponentsModule
  ])
  .component('app', AppComponent)
  .name;

export default AppModule;
