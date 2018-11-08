'use strict';

import angular from 'angular';
import DetectModule from './detect/detect.module';
import DialogboxModule from './dialogbox/dialogbox.module';
import TableModule from './table/table.module';

/**
 * @const {String} ComponentsModule
 */
const ComponentsModule = angular
  .module('app.components', [
    DetectModule,
    DialogboxModule,
    TableModule
  ])
  .name;

export default ComponentsModule;
